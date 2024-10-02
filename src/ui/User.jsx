import { useState } from "react";

function User() {
  const [today] = useState(new Date());
  const fomartedDay = today.toLocaleDateString("default", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="text-whi flex items-center gap-5">
      <img
        className="h-9 w-9 rounded-full"
        src="./default-user.jpg"
        alt="users profile"
      />
      <div>
        <p className="text-xs">Hello %X%</p>
        <p className="text-lg">{fomartedDay}</p>
      </div>
    </div>
  );
}

export default User;
