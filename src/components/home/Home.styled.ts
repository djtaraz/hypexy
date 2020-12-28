import styled from "styled-components";

const HomeStyle = styled.div`
  @keyframes jump {
    0% {
      top: 0px;
    }
    50% {
      top: 40px;
    }
    100% {
      top: 0px;
    }
  }

  #anim-img {
    position: absolute;
    animation: jump 3s infinite;
  }

  #services {
    text-align: center;
  }

  #twitch-img {
    height: 43.25%;
    object-fit: cover;
  }

  #twitch-order {
    background-color: #9662e4;
    border-color: transparent;
  }

  #tiktok-order {
    background: #ee1d52;
    border-color: transparent;
  }

  #why-us {
    text-align: center;
  }

  #card {
    background-color: #131417;
    color: #ffe4df;
  }
`;

export { HomeStyle };
