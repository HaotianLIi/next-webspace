import { getAllUser } from "./model/userModel";

const run = async () => {
    const result = await getAllUser()
    console.log("result:", result)
    return result
}

run()


// import { getAllUser } from "./model/userModel";

// const run = async () => {
//   console.log("Fetching users...");
//   const users = await getAllUser();
//   console.log("Users:", users);
// };

// run();

  
