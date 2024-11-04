import { useState, useEffect } from "react";

export default function GithubProfileFinder() {
  const [userName, setUserName] = useState("zarkonow");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchGithHubUserData() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = res.json();

    if (data) {
      setUserData(data);
      setLoading(false);
    }
    console.log(data);
  }

  function handleSubmit() {}

  useEffect(() => {
    fetchGithHubUserData();
  }, []);

  if (loading) {
    return <h1>Loading data ! Please wait</h1>;
  }

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
