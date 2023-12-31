import Link from "next/link";

export default function Footer() {
  return (
    <footer className="lg:sticky bottom-0  left-0 w-full bg-[#462D81] grid place-items-center py-12 z-0">
      <img
        style={{ marginTop: "2rem" }}
        src="/assets/white-logo.svg"
        className="mb-10 lg:w-[15%]"
        alt=""
      />
      <div className="flex gap-2 lg:!gap-5 items-center mb-8 lg:mb-20">
        <p className="text-[16px] lg:text-[20px] text-white m-0">Creative</p>
        <div className="h-[16px]  lg:h-[24px] w-[1px] bg-white m-0 "></div>
        <p className="text-[16px] lg:text-[20px] text-white m-0">TVC</p>
        <div className="h-[16px]  lg:h-[24px] w-[1px] bg-white m-0 "></div>

        <p className="text-[16px] lg:text-[20px] text-white m-0">
          Social media
        </p>
        <div className="h-[16px]  lg:h-[24px] w-[1px] bg-white m-0 "></div>

        <p className="text-[16px] lg:text-[20px] text-white m-0">
          Lead & sales
        </p>
      </div>
      <div className="container">
        <div
          style={{
            borderBottom: "1px solid white m-0",
            height: "100%",
            width: "100%",
            marginBottom: "1.5rem",
          }}
        ></div>
        <div
          style={{ display: "flex", width: "100%" }}
          className="flex flex-col lg:flex-row justify-between items-center gap-10"
        >
          <div
            className="gap-4  overrideText"
            style={{
              display: "flex",
            }}
          >
            <Link href="https://www.linkedin.com/company/94152171/admin/feed/posts/">
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="25" cy="25" r="25" fill="white" />
                <path
                  d="M19.9404 17.999C19.9402 18.5295 19.7292 19.0381 19.3539 19.413C18.9787 19.7879 18.4699 19.9983 17.9394 19.998C17.409 19.9978 16.9004 19.7868 16.5255 19.4116C16.1506 19.0363 15.9402 18.5275 15.9404 17.997C15.9407 17.4666 16.1517 16.958 16.5269 16.5831C16.9022 16.2082 17.411 15.9978 17.9414 15.998C18.4719 15.9983 18.9805 16.2093 19.3554 16.5845C19.7302 16.9598 19.9407 17.4686 19.9404 17.999ZM20.0004 21.479H16.0004V33.999H20.0004V21.479ZM26.3204 21.479H22.3404V33.999H26.2804V27.429C26.2804 23.769 31.0504 23.429 31.0504 27.429V33.999H35.0004V26.069C35.0004 19.899 27.9404 20.129 26.2804 23.159L26.3204 21.479Z"
                  fill="#462D81"
                />
              </svg>
            </Link>

            <Link href="https://www.instagram.com/push__x__pull/">
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="25" cy="25" r="25" fill="white" />
                <path
                  d="M25.4997 15.084C28.3299 15.084 28.683 15.0944 29.7934 15.1465C30.9028 15.1986 31.658 15.3725 32.3226 15.6309C33.0101 15.8954 33.5893 16.2538 34.1684 16.8319C34.6981 17.3526 35.108 17.9825 35.3695 18.6777C35.6268 19.3413 35.8018 20.0975 35.8538 21.2069C35.9028 22.3173 35.9163 22.6704 35.9163 25.5007C35.9163 28.3309 35.9059 28.684 35.8538 29.7944C35.8018 30.9038 35.6268 31.659 35.3695 32.3236C35.1087 33.0192 34.6988 33.6492 34.1684 34.1694C33.6476 34.6989 33.0177 35.1087 32.3226 35.3704C31.659 35.6277 30.9028 35.8027 29.7934 35.8548C28.683 35.9038 28.3299 35.9173 25.4997 35.9173C22.6695 35.9173 22.3163 35.9069 21.2059 35.8548C20.0965 35.8027 19.3413 35.6277 18.6768 35.3704C17.9813 35.1095 17.3513 34.6996 16.8309 34.1694C16.3011 33.6488 15.8913 33.0188 15.6299 32.3236C15.3715 31.66 15.1976 30.9038 15.1455 29.7944C15.0965 28.684 15.083 28.3309 15.083 25.5007C15.083 22.6704 15.0934 22.3173 15.1455 21.2069C15.1976 20.0965 15.3715 19.3423 15.6299 18.6777C15.8905 17.9821 16.3005 17.352 16.8309 16.8319C17.3514 16.3019 17.9814 15.892 18.6768 15.6309C19.3413 15.3725 20.0955 15.1986 21.2059 15.1465C22.3163 15.0975 22.6695 15.084 25.4997 15.084ZM25.4997 20.2923C24.1183 20.2923 22.7936 20.8411 21.8168 21.8178C20.8401 22.7946 20.2913 24.1193 20.2913 25.5007C20.2913 26.882 20.8401 28.2067 21.8168 29.1835C22.7936 30.1603 24.1183 30.709 25.4997 30.709C26.881 30.709 28.2058 30.1603 29.1825 29.1835C30.1593 28.2067 30.708 26.882 30.708 25.5007C30.708 24.1193 30.1593 22.7946 29.1825 21.8178C28.2058 20.8411 26.881 20.2923 25.4997 20.2923ZM32.2705 20.0319C32.2705 19.6866 32.1333 19.3554 31.8891 19.1112C31.6449 18.867 31.3138 18.7298 30.9684 18.7298C30.6231 18.7298 30.2919 18.867 30.0477 19.1112C29.8035 19.3554 29.6663 19.6866 29.6663 20.0319C29.6663 20.3772 29.8035 20.7084 30.0477 20.9526C30.2919 21.1968 30.6231 21.334 30.9684 21.334C31.3138 21.334 31.6449 21.1968 31.8891 20.9526C32.1333 20.7084 32.2705 20.3772 32.2705 20.0319ZM25.4997 22.3757C26.3285 22.3757 27.1233 22.7049 27.7094 23.2909C28.2954 23.877 28.6247 24.6718 28.6247 25.5007C28.6247 26.3295 28.2954 27.1243 27.7094 27.7104C27.1233 28.2964 26.3285 28.6257 25.4997 28.6257C24.6709 28.6257 23.876 28.2964 23.29 27.7104C22.7039 27.1243 22.3747 26.3295 22.3747 25.5007C22.3747 24.6718 22.7039 23.877 23.29 23.2909C23.876 22.7049 24.6709 22.3757 25.4997 22.3757Z"
                  fill="#462D81"
                />
              </svg>
            </Link>

            <Link href="https://www.facebook.com/profile.php?id=100092271850049">
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="25" cy="25" r="25" fill="white" />
                <path
                  d="M27.5837 26.0632H30.1878L31.2295 21.8965H27.5837V19.8132C27.5837 18.7402 27.5837 17.7298 29.667 17.7298H31.2295V14.2298C30.8899 14.185 29.6076 14.084 28.2534 14.084C25.4253 14.084 23.417 15.81 23.417 18.9798V21.8965H20.292V26.0632H23.417V34.9173H27.5837V26.0632Z"
                  fill="#462D81"
                />
              </svg>
            </Link>
          </div>

          <div>
            <p
              style={{
                fontFamily: "Helvetica",
                color: "white",
              }}
              className="text-4 lg:!text-[16px] overrideText"
            >
              18th Floor, No. 2182, 2nd Block,Trellis South, NSK <br />{" "}
              Salai,Arcot Road, Vadapalani, <br /> Chennai,Tamil Nadu, 600026
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
