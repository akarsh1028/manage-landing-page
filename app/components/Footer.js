import Logo from './Svgs/Logo'
import Input from './inputs/Input';

const Footer = () => {

  return (
    <footer role="contentinfo" className='spacing bg-verydarkblue'>
      <div className='py-14 flex justify-between flex-col-reverse md:flex-row max-md:items-center max-md:gap-12'>
        <div className='flex flex-col-reverse justify-between flex-1 max-md:items-center md:flex-col max-md:gap-14'>
          <Logo color='#ffffff' />
          <div className='flex gap-5 sm:gap-8 md:gap-3'>
            <svg className='cursor-pointer social max-sm:w-8 max-sm:h-8 max-md:w-10 max-md:h-10' width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.396 0.5H1.604C0.994 0.5 0.5 0.994 0.5 1.604V19.397C0.5 20.006 0.994 20.5 1.604 20.5H11.184V12.755H8.576V9.737H11.182V7.51C11.182 4.927 12.76 3.52 15.065 3.52C16.169 3.52 17.117 3.602 17.394 3.639V6.339H15.796C14.542 6.339 14.3 6.936 14.3 7.809V9.737H17.289L16.899 12.755H14.299V20.5H19.397C20.005 20.5 20.499 20.006 20.499 19.396V1.604C20.5 0.994 20.006 0.5 19.396 0.5Z" fill="white" /></svg>
            <svg className='cursor-pointer social max-sm:w-8 max-sm:h-8 max-md:w-10 max-md:h-10' width="20" height="20" viewBox="0 0 42 41" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_1_27)"><path d="M20.6742 0.5C9.89315 0.5 1.15039 9.456 1.15039 20.5C1.15039 31.546 9.89315 40.5 20.6742 40.5C31.4572 40.5 40.198 31.546 40.198 20.5C40.198 9.456 31.4572 0.5 20.6742 0.5ZM27.9 28.654C24.4794 28.894 16.8632 28.894 13.4484 28.654C9.74477 28.394 9.31329 26.536 9.28596 20.5C9.31329 14.452 9.74868 12.606 13.4484 12.346C16.8632 12.106 24.4813 12.106 27.9 12.346C31.6056 12.606 32.0351 14.464 32.0644 20.5C32.0351 26.548 31.5997 28.394 27.9 28.654ZM17.4215 16.596L25.4204 20.494L17.4215 24.404V16.596Z" fill="white" /></g><defs><clipPath id="clip0_1_27"><rect width="41" height="40" fill="white" transform="translate(0.5 0.5)" /></clipPath></defs></svg>
            <svg className='cursor-pointer social max-sm:w-8 max-sm:h-8 max-md:w-10 max-md:h-10' width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.167 2.297C19.4181 2.62898 18.6236 2.84674 17.81 2.943C18.6672 2.43062 19.3084 1.6237 19.614 0.673005C18.8084 1.15107 17.9271 1.48792 17.008 1.669C16.6243 1.25927 16.1604 0.932799 15.6452 0.709854C15.1299 0.48691 14.5744 0.372254 14.013 0.373005C11.364 0.373005 9.41802 2.845 10.016 5.411C8.38458 5.32937 6.78855 4.90551 5.33158 4.16694C3.8746 3.42838 2.58926 2.39162 1.55902 1.124C1.03476 2.02748 0.874271 3.0967 1.11018 4.11428C1.34609 5.13185 1.96069 6.02138 2.82902 6.60201C2.17738 6.58209 1.53996 6.40653 0.970016 6.09C0.925016 7.991 2.28702 9.77 4.26002 10.165C3.65573 10.3291 3.02196 10.353 2.40702 10.235C2.66891 11.0506 3.17936 11.7639 3.86687 12.275C4.55438 12.786 5.38451 13.0693 6.24102 13.085C4.52118 14.4341 2.33626 15.0455 0.166016 14.785C2.0423 15.9904 4.2259 16.6302 6.45602 16.628C14.074 16.628 18.378 10.194 18.118 4.423C18.9213 3.84212 19.6148 3.12291 20.166 2.299L20.167 2.297Z" fill="white" /></svg>
            <svg className='cursor-pointer social max-sm:w-8 max-sm:h-8 max-md:w-10 max-md:h-10' width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_1_77)"><path d="M10.5 0.5C4.978 0.5 0.5 4.977 0.5 10.5C0.5 14.737 3.136 18.355 6.856 19.812C6.768 19.021 6.689 17.807 6.891 16.944C7.073 16.164 8.063 11.974 8.063 11.974C8.063 11.974 7.764 11.374 7.764 10.488C7.764 9.098 8.57 8.06 9.574 8.06C10.426 8.06 10.838 8.7 10.838 9.468C10.838 10.326 10.293 11.608 10.01 12.798C9.774 13.793 10.51 14.605 11.49 14.605C13.268 14.605 14.634 12.731 14.634 10.025C14.634 7.632 12.914 5.957 10.457 5.957C7.612 5.957 5.942 8.092 5.942 10.297C5.942 11.156 6.273 12.078 6.687 12.578C6.72243 12.6159 6.74742 12.6624 6.75951 12.7129C6.77161 12.7634 6.7704 12.8161 6.756 12.866L6.478 13.999C6.434 14.182 6.333 14.222 6.143 14.133C4.894 13.552 4.113 11.726 4.113 10.259C4.113 7.105 6.405 4.207 10.721 4.207C14.19 4.207 16.886 6.68 16.886 9.983C16.886 13.43 14.713 16.203 11.696 16.203C10.683 16.203 9.731 15.678 9.405 15.055L8.782 17.433C8.556 18.302 7.947 19.391 7.538 20.054C8.475 20.344 9.469 20.5 10.5 20.5C16.022 20.5 20.5 16.023 20.5 10.5C20.5 4.977 16.022 0.5 10.5 0.5Z" fill="white" /></g><defs><clipPath id="clip0_1_77"><rect width="20" height="20" fill="white" transform="translate(0.5 0.5)" /></clipPath></defs></svg>
            <svg className='cursor-pointer social max-sm:w-8 max-sm:h-8 max-md:w-10 max-md:h-10' width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.833 2.302C13.503 2.302 13.82 2.312 14.875 2.361C17.585 2.484 18.851 3.77 18.975 6.46C19.023 7.514 19.032 7.83 19.032 10.5C19.032 13.172 19.022 13.488 18.974 14.542C18.85 17.229 17.588 18.517 14.875 18.641C13.82 18.689 13.505 18.699 10.833 18.699C8.16298 18.699 7.84698 18.689 6.79298 18.641C4.07598 18.517 2.81698 17.225 2.69298 14.541C2.64498 13.487 2.63498 13.171 2.63498 10.5C2.63498 7.83 2.64498 7.514 2.69298 6.46C2.81698 3.77 4.07998 2.483 6.79298 2.36C7.84698 2.312 8.16298 2.302 10.833 2.302ZM10.833 0.5C8.11798 0.5 7.77798 0.512 6.71098 0.56C3.07898 0.727 1.05998 2.742 0.893984 6.377C0.844984 7.444 0.833984 7.784 0.833984 10.5C0.833984 13.216 0.844984 13.557 0.893984 14.623C1.05998 18.255 3.07498 20.273 6.70998 20.44C7.77798 20.488 8.11798 20.5 10.833 20.5C13.549 20.5 13.89 20.488 14.957 20.44C18.585 20.273 20.608 18.258 20.773 14.623C20.822 13.557 20.833 13.216 20.833 10.5C20.833 7.784 20.822 7.444 20.773 6.378C20.61 2.749 18.593 0.728 14.958 0.56C13.89 0.51 13.549 0.5 10.833 0.5ZM10.833 5.365C9.4711 5.365 8.16499 5.90601 7.20199 6.86901C6.23899 7.83201 5.69798 9.13811 5.69798 10.5C5.69798 11.8619 6.23899 13.168 7.20199 14.131C8.16499 15.094 9.4711 15.635 10.833 15.635C12.1949 15.635 13.501 15.094 14.464 14.131C15.427 13.168 15.968 11.8619 15.968 10.5C15.968 9.13811 15.427 7.83201 14.464 6.86901C13.501 5.90601 12.1949 5.365 10.833 5.365ZM10.833 13.833C9.94902 13.833 9.10126 13.4818 8.4762 12.8568C7.85114 12.2317 7.49998 11.384 7.49998 10.5C7.49998 9.61603 7.85114 8.76827 8.4762 8.14321C9.10126 7.51815 9.94902 7.167 10.833 7.167C11.717 7.167 12.5647 7.51815 13.1898 8.14321C13.8148 8.76827 14.166 9.61603 14.166 10.5C14.166 11.384 13.8148 12.2317 13.1898 12.8568C12.5647 13.4818 11.717 13.833 10.833 13.833ZM16.172 3.963C16.0144 3.96293 15.8583 3.99391 15.7127 4.05415C15.5671 4.1144 15.4348 4.20273 15.3233 4.31412C15.2118 4.4255 15.1234 4.55775 15.063 4.70332C15.0027 4.84888 14.9716 5.00491 14.9715 5.1625C14.9714 5.32009 15.0024 5.47614 15.0626 5.62176C15.1229 5.76737 15.2112 5.8997 15.3226 6.01117C15.434 6.12265 15.5662 6.2111 15.7118 6.27146C15.8574 6.33183 16.0134 6.36293 16.171 6.363C16.4892 6.363 16.7945 6.23657 17.0195 6.01153C17.2446 5.78648 17.371 5.48126 17.371 5.163C17.371 4.84474 17.2446 4.53952 17.0195 4.31447C16.7945 4.08943 16.4892 3.963 16.171 3.963H16.172Z" fill="white" /></svg>
          </div>
        </div>
        <div className='flex max-md:justify-around w-full flex-1'>
          <ul className='flex flex-col gap-3'>
            <li className='footerlinks'>Home</li>
            <li className='footerlinks'>Pricing</li>
            <li className='footerlinks'>Products</li>
            <li className='footerlinks'>About Us</li>
          </ul>
          <ul className='flex flex-col gap-3 md:hidden'>
            <li className='footerlinks'>Careers</li>
            <li className='footerlinks'>Community</li>
            <li className='footerlinks'>Privacy Policy</li>
          </ul>
        </div>
        <div className='flex-1 max-md:hidden'>
          <ul className='flex flex-col gap-3'>
            <li className='footerlinks'>Careers</li>
            <li className='footerlinks'>Community</li>
            <li className='footerlinks'>Privacy Policy</li>
          </ul>
        </div>
        <div className='flex flex-col justify-between flex-1'>
          <Input/>
          <div className='text-gray-400 text-xs flex justify-end max-md:hidden'>Copyright 2020. All Rights Reserved</div>
        </div>
      </div>
      <div className='md:hidden text-gray-400 text-xs text-center pb-8'>Copyright 2020. All Rights Reserved</div>
    </footer>
  )
}

export default Footer