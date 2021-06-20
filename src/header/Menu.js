import { forwardRef } from "react";
export default forwardRef(function ({}, ref) {
  return (
    <ul hidden ref={ref}>
      <li>
        <button>Edit Info</button>
      </li>
      <li>
        <button>Display Settings</button>
      </li>
      <li>
        <button>Privacy Settings</button>
      </li>
      <li>
        <button>Logout</button>
      </li>
    </ul>
  );
});
