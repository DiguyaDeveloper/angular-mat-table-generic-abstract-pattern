import { APP_INITIALIZER, ModuleWithProviders, NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { CeccoffMockApiInterceptor } from "./mock-api.interceptor";
import { CECCOFF_MOCK_API_DEFAULT_DELAY } from "./mock-api.constants";

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CeccoffMockApiInterceptor,
      multi: true,
    },
  ],
})
export class CeccoffMockApiModule {
  /**
   * CeccoffMockApi module default configuration.
   *
   * @param mockApiServices - Array of services that register mock API handlers
   * @param config - Configuration options
   * @param config.delay - Default delay value in milliseconds to apply all responses
   */
  static forRoot(
    mockApiServices: any[],
    config?: { delay?: number }
  ): ModuleWithProviders<CeccoffMockApiModule> {
    return {
      ngModule: CeccoffMockApiModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          deps: [...mockApiServices],
          useFactory: () => (): any => null,
          multi: true,
        },
        {
          provide: CECCOFF_MOCK_API_DEFAULT_DELAY,
          useValue: config?.delay ?? 0,
        },
      ],
    };
  }
}
