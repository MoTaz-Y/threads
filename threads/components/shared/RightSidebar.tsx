import React from "react";

export default function RightSidebar() {
  return (
    <section className="custom-scrollbar rightsidebar">
      <div className="flex w-full flex-1 justify-start flex-col gep-6 px-6">
        <h3 className="text-heading4-medium text-light-1">
          Suggested Communities
        </h3>
      </div>
      <div className="flex w-full flex-1 justify-start flex-col gep-6 px-6">
        <h3 className="text-heading4-medium text-light-1">Suggested Users</h3>
      </div>
    </section>
  );
}
