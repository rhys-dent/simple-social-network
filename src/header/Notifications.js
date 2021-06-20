import { forwardRef } from "react";

export default forwardRef(function ({}, ref) {
  return (
    <section hidden ref={ref}>
      Notifications
    </section>
  );
});
