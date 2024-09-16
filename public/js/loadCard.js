async function fetchProfile(username) {
  try {
      const url = `/api/ig/${username}`;
      const response = await fetch(url);
      const result = await response.json();

      if (result.data && result.data.length > 0) {
          const profile = result.data[0];
          const profilePicUrl =
            profile.profilePicUrl
              ? `/instagram-image-proxy?url=${encodeURIComponent(profile.profilePicUrl)}`
              : "https://www.bing.com/th?id=OIP.9YHXM-aeJCLOUldfFewIGwAAAA&w=150&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2";

          return {
              profilePicUrl: profilePicUrl,
              name: profile.name,
              description: profile.description,
              url_name: profile.url_name,
          };
      } else {
          console.error("No profile data found for", username);
          return null;
      }
  } catch (error) {
      console.error("Error fetching profile data:", error);
      return null;
  }
}

async function loadProfiles() {
  const profileCards = document.querySelectorAll(".profile-link");

  for (const card of profileCards) {
      const usernameElement = card.querySelector(".usernameInput");
      const username = usernameElement.textContent.trim();
      const profile = await fetchProfile(username);

      if (profile) {
          card.href = profile.url_name;
          
          const profileGallery = card.previousElementSibling;
          const profileCard = document.createElement("div");
          profileCard.innerHTML = `
            <img src="${profile.profilePicUrl}" alt="Profile Picture" class="object-cover object-center w-full h-44 rounded-t-lg" />
          `;
          profileGallery.appendChild(profileCard);
      }
  }
}

window.onload = loadProfiles;
