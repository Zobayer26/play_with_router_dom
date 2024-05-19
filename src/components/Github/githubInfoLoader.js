 const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/Zobayer26")
    return response.json()
  }
  export default githubInfoLoader