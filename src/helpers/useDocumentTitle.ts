import {
  useEffect,
  useRef,
} from 'react';

function useDocumentTitle(title:string, prevailOnUnmount = false) {
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => () => {
    if (!prevailOnUnmount) {
      document.title = defaultTitle.current;
    }
  }, [prevailOnUnmount])
}

export default useDocumentTitle