import { UserSession } from "../../types/user/user.types";
import { Dropdown, DropdownDivider, DropdownItem } from "flowbite-react";
import { UserProfile } from "../Icons/UserProfile";

type ProfileProps = {
  user: UserSession;
};

export function Profile({ user }: ProfileProps) {
  return (
    <Dropdown
      className="p-2"
      label={
        <div className="flex gap-2 items-center">
          <UserProfile />
          <span className="">{user?.username}</span>
        </div>
      }
      arrowIcon={false}
      inline
    >
      <p className="text-xs text-slate-800">{user?.email}</p>
      <DropdownDivider />
      <DropdownItem>Cerrar Sesion</DropdownItem>
    </Dropdown>
  );
}
