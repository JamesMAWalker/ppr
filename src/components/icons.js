import React from 'react'

export const RightChevron = props => {
  return (
    <svg
      className={props.classN}
      id="Capa_1"
      enableBackground="new 0 0 551.13 551.13"
      viewBox="0 0 551.13 551.13"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m361.679 275.565-223.896 223.897v51.668l275.565-275.565-275.565-275.565v51.668z" />
    </svg>
  )
}

export const LeftChevron = props => {
  return (
    <svg
      className={props.classN}
      viewBox="0 0 13 22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.3018 21.1383C12.2185 21.2149 12.1194 21.2756 12.0104 21.3171C11.9014 21.3585 11.7845 21.3799 11.6665 21.3799C11.5485 21.3799 11.4316 21.3585 11.3226 21.3171C11.2136 21.2756 11.1145 21.2149 11.0312 21.1383L0.263178 11.2718C0.179612 11.1954 0.113314 11.1047 0.0680771 11.0048C0.0228399 10.9049 -0.00044632 10.7978 -0.00044632 10.6897C-0.00044632 10.5815 0.0228399 10.4744 0.0680771 10.3745C0.113314 10.2747 0.179612 10.1839 0.263178 10.1075L11.0312 0.241005C11.1997 0.0866157 11.4282 -0.000118256 11.6665 -0.000118256C11.9048 -0.000118256 12.1333 0.0866157 12.3018 0.241005C12.4703 0.395394 12.565 0.604794 12.565 0.823133C12.565 1.04147 12.4703 1.25087 12.3018 1.40526L2.16732 10.6897L12.3018 19.9741C12.3854 20.0505 12.4517 20.1412 12.4969 20.2411C12.5421 20.341 12.5654 20.4481 12.5654 20.5562C12.5654 20.6644 12.5421 20.7714 12.4969 20.8713C12.4517 20.9712 12.3854 21.062 12.3018 21.1383Z"
        fill="#363636"
      />
    </svg>
  )
}

export const ScrollIcon = props => {
  return (
    <svg onClick={props.action} className={props.classN} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 31L10 13L30 13L20 31Z" fill="white" />
    </svg>
  )
}

export const StravaIcon = props => {
  return (
    <svg
      className={props.classN}
      width="22"
      height="30"
      viewBox="0 0 22 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.905 22.43L12.2938 17.285H8.4625L14.905 30L21.3425 17.285H17.51L14.905 22.43ZM8.75 10.2863L12.295 17.2837H17.51L8.75 0L0 17.285H5.21125"
        fill="#363636"
        fillOpacity="0.93"
      />
    </svg>
  )
}

export const InstaIcon = props => {
  return (
    <svg
      className={props.classN}
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5026 8.33398C11.3975 8.33398 10.3377 8.77297 9.55633 9.55437C8.77492 10.3358 8.33594 11.3956 8.33594 12.5007C8.33594 13.6057 8.77492 14.6655 9.55633 15.4469C10.3377 16.2283 11.3975 16.6673 12.5026 16.6673C13.6077 16.6673 14.6675 16.2283 15.4489 15.4469C16.2303 14.6655 16.6693 13.6057 16.6693 12.5007C16.6693 11.3956 16.2303 10.3358 15.4489 9.55437C14.6675 8.77297 13.6077 8.33398 12.5026 8.33398Z"
        fill="#363636"
        fillOpacity="0.93"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 0C5.51088 0 3.60322 0.790176 2.1967 2.1967C0.790176 3.60322 0 5.51088 0 7.5L0 17.5C0 19.4891 0.790176 21.3968 2.1967 22.8033C3.60322 24.2098 5.51088 25 7.5 25H17.5C19.4891 25 21.3968 24.2098 22.8033 22.8033C24.2098 21.3968 25 19.4891 25 17.5V7.5C25 5.51088 24.2098 3.60322 22.8033 2.1967C21.3968 0.790176 19.4891 0 17.5 0L7.5 0ZM6.66667 12.5C6.66667 10.9529 7.28125 9.46917 8.37521 8.37521C9.46917 7.28125 10.9529 6.66667 12.5 6.66667C14.0471 6.66667 15.5308 7.28125 16.6248 8.37521C17.7188 9.46917 18.3333 10.9529 18.3333 12.5C18.3333 14.0471 17.7188 15.5308 16.6248 16.6248C15.5308 17.7188 14.0471 18.3333 12.5 18.3333C10.9529 18.3333 9.46917 17.7188 8.37521 16.6248C7.28125 15.5308 6.66667 14.0471 6.66667 12.5ZM18.3333 6.66667H20V5H18.3333V6.66667Z"
        fill="#363636"
        fillOpacity="0.93"
      />
    </svg>
  )
}
