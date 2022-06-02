import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";

class AnimationCurves {
  static standard = "cubic-bezier(0.4, 0.0, 0.2, 1)";
  static deceleration = "cubic-bezier(0.0, 0.0, 0.2, 1)";
  static acceleration = "cubic-bezier(0.4, 0.0, 1, 1)";
  static sharp = "cubic-bezier(0.4, 0.0, 0.6, 1)";
}
class AnimationDurations {
  static complex = "375ms";
  static entering = "225ms";
  static exiting = "195ms";
}

// -----------------------------------------------------------------------------------------------------
// @ Expand / collapse
// -----------------------------------------------------------------------------------------------------
export const ExpandCollapse = trigger("expandCollapse", [
  state(
    "collapsed",
    style({
      height: "0px",
      minHeight: "0",
      visibility: "hidden",
    })
  ),

  state("expanded", style({ height: "*", visibility: "visible" })),

  // Transition
  transition("collapsed <=> expanded", animate("{{timings}}"), {
    params: {
      timings: `${AnimationDurations.entering} ${AnimationCurves.deceleration}`,
    },
  }),
]);
