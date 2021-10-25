const linksSocialMedia = {
  github: 'rodrigo-barao',
  youtube: 'RodrigoBaraoMota',
  instagram: 'rodrigo.barao',
  facebook: 'rodrigo.barao',
  twitter: 'rsmota'
}

for (let li of socialLinks.children) {
  const social = li.getAttribute('class')
  li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
}

const url = `https://api.github.com/users/rodrigo-barao`
fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userAvatar.src = data.avatar_url
    githubLogin.textContent = data.login
  })
