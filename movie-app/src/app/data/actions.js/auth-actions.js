"use server";

export async function registerUserAction(form) {
    console.log("Hello From Register User Action");

    
  const fields = {
    name: form.get("name"),
    password: form.get("password"),
    email: form.get("email"),
  };

  console.log("#############");
  console.log(fields);
  console.log("#############");
  }
  