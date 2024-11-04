import { useState, useEffect } from "react";

export default function GithubProfileFinder() {
  const [userName, setUserName] = useState("zarkonow");


async function fetchGithHubUserData() {
    const res = await fetch(`https://api.github.com/users/${userName}`)

    const data = res.json()
    console.log(data)
    
}


  function handleSubmit() {

  }


  useEffect(() => {
   fetchGithHubUserData()
  }, [])
  

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Github username"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
    </div>
  );
}
