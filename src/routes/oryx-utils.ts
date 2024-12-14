import {useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";

export function oryxSubApp(oryxRoute: string) {

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleClick = (e: any) => {
      const isNonNavigationClick =
        e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey;
      if (e.defaultPrevented || isNonNavigationClick) {
        return;
      }

      const anchor = e
        .composedPath()
        .find((n) => (n as HTMLElement).tagName === 'A') as
        | HTMLAnchorElement
        | undefined;
      if (
        anchor === undefined ||
        anchor.target !== '' ||
        anchor.hasAttribute('download') ||
        anchor.getAttribute('rel') === 'external'
      ) {
        return;
      }

      const href = anchor.href;
      if (href === '' || href.startsWith('mailto:')) {
        return;
      }

      const location = window.location;
      if (anchor.origin !== origin) {
        return;
      }

      if (anchor.pathname.startsWith(oryxRoute) && location.pathname.startsWith(oryxRoute)) {
        return;
      }

      e.preventDefault();
      navigate(anchor.pathname + anchor.search + anchor.hash);
    };

    // Add click event listener
    document.body.addEventListener('click', handleClick);

    // Clean up
    return () => {
      document.body.removeEventListener('click', handleClick);
    };
  }, [navigate]);
}
