import Link from "next/link";
import Input from "./input";
import { useEffect, useState } from "react";
import { useTypedSelector } from "../hooks/use-typed-selector";
import { useActions } from "../hooks/use-actions";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { scrollToDiv } from "../utils/display";
import { useRouter } from "next/router";
import { parseSearchField } from "../utils/parse-search-field";
interface NavbarProps {
  headerTitle?: string;
  onSearchChange?: (categories: string[], titles: string[]) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  headerTitle = "Jason's Space",
  onSearchChange,
}) => {
  const searchInput = useTypedSelector(({ data }) => data.search);
  const [input, setInput] = useState("");
  const router = useRouter();
  const mobile_links = ["home", "search", "newsletter"];
  const handleActivateMobileMenu = () => {
    console.log("I RAN");
    const mobile_menu = document.querySelector(".navbar__mobile-menu__links");

    mobile_menu?.classList.remove("navbar__mobile-menu__links--slide-out");
    mobile_menu?.classList.add("navbar__mobile-menu__links--slide-in");
  };
  const { setSearchField } = useActions();
  const goToPosts = () => {
    const listArticleDiv: HTMLDivElement | null = document.querySelector(
      ".list-article-container"
    );
    if (listArticleDiv) {
      scrollToDiv(listArticleDiv);
    }
  };
  const handleMobileLinkClick = (link: string) => {
    switch (link) {
      case "home":
        router.push("/");
        break;
      case "newsletter":
        const newsLetterDiv: HTMLDivElement | null = document.querySelector(
          ".newsletter"
        );
        scrollToDiv(newsLetterDiv);
        return;
      case "posts":
        goToPosts();

        break;
      //not sure why this is counted as a fallthrough case look into it
      //@ts-ignore
      case "search":
        router.push({ pathname: "/search", query: { title: "" } });

      default:
        break;
    }
  };
  useEffect(() => {
    let inputTimer: any;
    const oldInput = `${input}`;
    if (input !== searchInput && inputTimer == undefined) {
      inputTimer = setTimeout(() => {
        if (oldInput === input) {
          //TODO refactor search page to use redux instead of local state. currently settings search field has no use
          setSearchField(input);
          const { titles, categories } = parseSearchField(input);
          if (router.route === "/") {
            router.push({
              pathname: "/search",
              query: {
                category: categories,
                title: titles,
              },
            });
          } else {
            if (onSearchChange) {
              onSearchChange(categories, titles);
            }
          }
        }
        clearTimeout(inputTimer);
      }, 550);
    }
    return () => {
      clearTimeout(inputTimer);
    };
  }, [input, searchInput]);
  useEffect(() => {
    const mobileBtn: HTMLButtonElement | null = document.querySelector(
      ".navbar__mobile-menu__btn"
    );
    if (mobileBtn) {
      mobileBtn.addEventListener("click", handleActivateMobileMenu);
    }
    const listener = (e: any) => {
      const mobile_menu_btn = document.querySelector(
        ".navbar__mobile-menu__btn"
      );
      const mobile_menu = document.querySelector(".navbar__mobile-menu__links");
      if (
        e.target !== mobile_menu &&
        mobile_menu?.classList.contains(
          "navbar__mobile-menu__links--slide-in"
        ) &&
        e.target.parentNode !== mobile_menu_btn
      ) {
        console.log(e.target);
        mobile_menu?.classList.remove("navbar__mobile-menu__links--slide-in");
        mobile_menu?.classList.add("navbar__mobile-menu__links--slide-out");
      }
    };
    window.addEventListener("click", listener);
    return () => {
      window.removeEventListener("click", listener, false);
    };
  }, []);

  return (
    <nav className='navbar'>
      <div className='logo flex center'>
        <Link href='/'>
          <a>
            <h1>{headerTitle} |</h1>
          </a>
        </Link>
        <Link href='/'>
          <a>
            <img
              className='ml-1 mt-1'
              src='https://img.icons8.com/ios-filled/50/000000/blogger.png'
            />
          </a>
        </Link>
      </div>
      <div className='navbar__left-menu flex center'>
        <div className='navbar__left-menu__links flex'>
          <Link href='/'>Home </Link>
          <a href='#' onClick={goToPosts}>
            Posts{" "}
          </a>
        </div>
        <Input
          rounded
          type='text'
          placeholder='Search...'
          popup
          value={input}
          onChange={(e) => {
            const currentInput = e.target.value;
            setInput(currentInput);
          }}
        />
      </div>
      <div className='navbar__mobile-menu' onClick={handleActivateMobileMenu}>
        <button
          className='navbar__mobile-menu__btn'
          onClick={handleActivateMobileMenu}
        >
          <FontAwesomeIcon icon={faBars} onClick={handleActivateMobileMenu} />
        </button>
        <div className={`navbar__mobile-menu__links`}>
          {mobile_links.map((link) => {
            return (
              <span
                key={link}
                className='navbar__mobile-menu__links--link capitalize'
                onClick={() => {
                  handleMobileLinkClick(link);
                }}
              >
                {link}
              </span>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
