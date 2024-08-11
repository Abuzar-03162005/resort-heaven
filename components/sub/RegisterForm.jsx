"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("Incomplete Credentials");
      return;
    }
    try {
      // checking if the user exists or not

      const resUserExist = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const { user } = await resUserExist.json();

      // setting the error in the case of existing user

      if (user) {
        setError("User Already Exists");
        return;
      }

      // sending the data to the api to store it in DB

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      // reseting the form
      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/login");
      } else {
        console.log("User Rgisteration failed");
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div className="Register_form h-screen relative z-50">
      <div className="px-10 py-5 absolute top-6 left-4">
        <Link href="/">
          <Image src="/back.png" alt="image" width={30} height={30} />
        </Link>
      </div>
      <div className="mx-auto max-w-screen-xl px-4 py-[4.5rem] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-[#f28482] sm:text-3xl pb-10">
            Get Register Yourself
          </h1>
          <form
            action=""
            className="mb-0 mt-6 space-y-4 rounded-3xl p-4 sm:p-6 lg:p-8 bg-white"
            onSubmit={handleSubmit}
          >
            <p className="text-center text-lg font-medium">
              Create your account
            </p>

            {/* Email field  */}

            <div>
              <div className="relative">
                <input
                  type="email"
                  className="outline-none w-full rounded-lg border border-[#ffddd2] p-4 pe-12 text-sm "
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Name field  */}

            <div>
              <div className="relative">
                <input
                  type="text"
                  className="outline-none w-full rounded-lg border border-[#ffddd2] p-4 pe-12 text-sm "
                  placeholder="Enter Fullname"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            {/* Passowrd field  */}

            <div>
              <div className="relative">
                <input
                  type="password"
                  className="outline-none w-full rounded-lg border border-[#ffddd2] p-4 pe-12 text-sm "
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {/* setting the error message  */}

            {error && (
              <div>
                <div className="relative">
                  <h1 className="bg-transparent text-red-600 px-2 rounded-lg text-[16px] font-bold text-center">
                    {error} {"‼️"}
                  </h1>
                </div>
              </div>
            )}

            {/* Submit button   */}

            <button
              type="submit"
              className="block w-full rounded-lg bg-[#f28482] px-5 py-3 text-sm font-medium text-white cursor-pointer"
            >
              Submit
            </button>

            {/* Link To Login Page  */}

            <p className="text-center text-sm text-gray-500">
              Already have an account ?
              <Link
                className="underline pl-2 text-blue-500 font-bold"
                href="/login"
              >
                login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
