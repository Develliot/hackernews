import {
    useRef,
    useLayoutEffect,
    DependencyList,
    RefObject,
    MutableRefObject,
} from 'react';

const isBrowser = typeof window !== `undefined`;

function getScrollPosition({
    element,
    useWindow,
}: {
    element?: RefObject<HTMLElement> | MutableRefObject<undefined> | null;
    useWindow: boolean;
}) {
    if (!isBrowser) return { x: 0, y: 0 };

    const target = element ? element.current : document.body;
    const position = target
        ? target.getBoundingClientRect()
        : { top: 0, left: 0, height: 0, width: 0 };

    return useWindow
        ? {
              x: window.scrollX,
              y: window.scrollY,
              width: window.innerWidth,
              height: window.innerHeight,
          }
        : {
              x: position.left,
              y: position.top,
              width: position.width,
              height: position.height,
          };
}

export function useScrollPosition(
    effect: any,
    deps: DependencyList,
    element: RefObject<HTMLElement> | MutableRefObject<undefined> | null,
    useWindow: boolean,
    wait: number
) {
    const position = useRef(getScrollPosition({ useWindow, element }));

    let throttleTimeout: number | null = null;

    const callBack = () => {
        const currPos = getScrollPosition({ element, useWindow });
        effect({ prevPos: position.current, currPos });
        position.current = currPos;
        throttleTimeout = null;
    };

    useLayoutEffect(() => {
        const handleScroll = () => {
            if (wait) {
                if (throttleTimeout === null) {
                    // eslint-disable-next-line
                    throttleTimeout = setTimeout(callBack, wait);
                }
            } else {
                callBack();
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, deps);
}

export default useScrollPosition;
