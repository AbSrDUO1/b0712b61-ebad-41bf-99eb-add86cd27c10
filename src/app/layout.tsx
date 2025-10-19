import type { Metadata } from "next";
import {
  Inter_Tight,
  Playfair_Display,
  Roboto,
  Open_Sans,
  Lato,
  Montserrat,
  Poppins,
  Raleway,
  Ubuntu,
  Nunito
} from "next/font/google";
import "./globals.css";
import { PostHogWrapper } from "@/components/PostHogWrapper";
import AuroraBackground from "@/components/background/AuroraBackground";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"]
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"]
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"]
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"]
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"]
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "Pizza Shop - Delicious Pizzas",
  description: "Enjoy delicious pizzas made with the finest ingredients. Visit our pizza shop today!",
  openGraph: {
    title: "Pizza Shop - Delicious Pizzas",
    description: "Enjoy delicious pizzas made with the finest ingredients. Visit our pizza shop today!",
    url: "",
    siteName: "Pizza Shop",
    images: [{
      url: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_346q1PwyWBLFgxn5R5gWYFVRO0Y/tmp/pizza-on-table-1760907020160-073e0a8c.jpg",
      alt: "Delicious Pizza"
    }],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Pizza Shop - Delicious Pizzas",
    description: "Enjoy delicious pizzas made with the finest ingredients. Visit our pizza shop today!",
    images: ["https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_346q1PwyWBLFgxn5R5gWYFVRO0Y/tmp/pizza-on-table-1760907020160-073e0a8c.jpg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <PostHogWrapper>
      <body
          className={`${interTight.variable} ${playfairDisplay.variable} ${roboto.variable} ${openSans.variable} ${lato.variable} ${montserrat.variable} ${poppins.variable} ${raleway.variable} ${ubuntu.variable} ${nunito.variable} antialiased`}
      >
      <AuroraBackground />
      {children}
      
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function() {
  if (window.self === window.top) return;
  if (window.__webildEditorInitialized) return;
  window.__webildEditorInitialized = true;
  let isActive = false;
  let hoveredElement = null;
  let selectedElement = null;
  let originalContent = null;
  let isEditing = false;
  let isSaving = false;
  const actualChanges = [];
  let listenersAttached = false;
  const originalValues = new Map();
  const textElements = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'a', 'button', 'li', 'div', 'label', 'td', 'th', 'dt', 'dd', 'figcaption', 'blockquote', 'pre', 'code'];
  const invalidElements = ['html', 'body', 'script', 'style', 'meta', 'link', 'head', 'noscript', 'title'];
  const hoverClass = 'webild-hover';
  const selectedClass = 'webild-selected';
  let elementTypeLabel = null;
  let selectedElementCategoryLabel = null;
  const style = document.createElement('style');
  style.id = 'webild-inspector-styles';
  style.textContent = \`
    .webild-hover {
      outline: 2px dashed rgba(90, 113, 230, 0.6) !important;
      outline-offset: 2px !important;
      cursor: pointer !important;
    }
    .webild-selected {
      outline: 2px solid rgba(90, 113, 230, 0.9) !important;
      outline-offset: 2px !important;
    }
    [contenteditable="true"].webild-selected {
      outline: 2px solid rgba(90, 113, 230, 0.9) !important;
      background-color: rgba(90, 113, 230, 0.05) !important;
    }
    .webild-element-type-label {
      position: fixed;
      z-index: 999999;
      background: rgba(90, 113, 230, 0.95);
      color: white;
      padding: 4px 10px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 500;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      pointer-events: none;
      white-space: nowrap;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }
    .webild-selected-category-label {
      position: fixed;
      top: 16px;
      left: 16px;
      z-index: 999998;
      background: rgba(90, 113, 230, 0.95);
      color: white;
      padding: 8px 12px;
      border-radius: 4px;
      font-size: 13px;
      font-weight: 600;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      pointer-events: none;
      white-space: nowrap;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }
  \`;
  document.head.appendChild(style);
  const extractOriginalImageUrl = (src) => {
    if (!src) return src;
    if (src.includes('/_next/image?url=')) {
      try {
        const urlParams = new URLSearchParams(src.split('?')[1]);
        const originalUrl = urlParams.get('url');
        return originalUrl ? decodeURIComponent(originalUrl) : src;
      } catch (e) {
        return src;
      }
    }
    if (src.startsWith('http://localhost:') && src.includes('/_next/image?url=')) {
      try {
        const urlParams = new URLSearchParams(src.split('?')[1]);
        const originalUrl = urlParams.get('url');
        return originalUrl ? decodeURIComponent(originalUrl) : src;
      } catch (e) {
        return src;
      }
    }
    return src;
  };
  const getSectionId = (element) => {
    let current = element;
    while (current && current !== document.body) {
      const sectionId = current.getAttribute('data-section');
      if (sectionId) {
        return sectionId;
      }
      current = current.parentElement;
    }
    return 'hero';
  };
  const getUniqueSelector = (element) => {
    const path = [];
    let current = element;
    while (current && current !== document.body) {
      let selector = current.tagName.toLowerCase();
      if (current.id) {
        selector = \`#\${current.id}\`;
        path.unshift(selector);
        break;
      }
      try {
        let classNameStr = '';
        if (current.className) {
          if (typeof current.className === 'string') {
            classNameStr = current.className;
          } else if (current.className.baseVal !== undefined) {
            classNameStr = current.className.baseVal;
          }
        }
        if (classNameStr) {
          const classes = classNameStr.trim().split(/\s+/).filter(cls =>
            cls && !cls.startsWith('webild-')
          );
          if (classes.length > 0) {
            selector += '.' + classes.slice(0, 2).join('.');
          }
        }
      } catch (e) {
      }
      const parent = current.parentElement;
      if (parent) {
        const siblings = Array.from(parent.children).filter(el => el.tagName === current.tagName);
        if (siblings.length > 1) {
          const index = siblings.indexOf(current) + 1;
          selector += \`:nth-of-type(\${index})\`;
        }
      }
      path.unshift(selector);
      current = parent;
      if (path.length >= 3) break;
    }
    return path.join(' > ');
  };
  
  const getElementType = (element) => {
    const tagName = element.tagName.toLowerCase();

    // Check if it has a data-section attribute first (highest priority)
    const sectionId = element.getAttribute('data-section');
    if (sectionId) {
      // Capitalize first letter: hero -> Hero, about -> About
      return sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
    }

    // Image elements - including those with background images
    if (tagName === 'img') return 'Image';
    
    // Check for background images on any element
    const computedStyle = window.getComputedStyle(element);
    const backgroundImage = computedStyle.backgroundImage;
    if (backgroundImage && backgroundImage !== 'none') {
      const urlMatch = backgroundImage.match(/url\(['"]?([^'")]+)['"]?\)/);
      if (urlMatch) {
        return 'Image';
      }
    }

    // Button elements - including those with role="button"
    if (tagName === 'button' || element.getAttribute('role') === 'button') return 'Button';
    
    // Check for clickable elements that might be buttons
    if ((tagName === 'a' || tagName === 'div' || tagName === 'span') && 
        (element.getAttribute('onclick') || 
         element.style.cursor === 'pointer' ||
         computedStyle.cursor === 'pointer')) {
      // If it has href, treat as link/text, otherwise treat as button
      if (tagName === 'a' && element.getAttribute('href')) {
        return 'Text';
      }
      return 'Button';
    }

    // Text elements - explicitly exclude div
    const textTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'label', 'a', 'li'];
    if (textTags.includes(tagName)) return 'Text';

    // Return null for unclassifiable elements (including div)
    return null;
  };

  const getElementInfo = (element) => {
    const rect = element.getBoundingClientRect();
    const tagName = element.tagName.toLowerCase();
    const selector = getUniqueSelector(element);
    const elementType = getElementType(element);
    const sectionId = getSectionId(element);

    let className = undefined;
    try {
      if (element.className) {
        if (typeof element.className === 'string') {
          className = element.className;
        } else if (element.className.baseVal !== undefined) {
          className = element.className.baseVal;
        }
      }
    } catch (e) {
    }
    const info = {
      tagName: tagName,
      id: element.id || undefined,
      className: className,
      selector: selector,
      elementType: elementType,
      sectionId: sectionId,
      boundingBox: {
        x: rect.left,
        y: rect.top,
        width: rect.width,
        height: rect.height
      }
    };
    if (tagName === 'img') {
      const rawSrc = element.getAttribute('src') || element.src;
      const originalSrc = extractOriginalImageUrl(rawSrc);
      info.imageData = {
        src: originalSrc,
        alt: element.alt || undefined,
        naturalWidth: element.naturalWidth,
        naturalHeight: element.naturalHeight
      };
    }
    const computedStyle = window.getComputedStyle(element);
    const backgroundImage = computedStyle.backgroundImage;
    if (backgroundImage && backgroundImage !== 'none') {
      const urlMatch = backgroundImage.match(/url\(['"]?([^'")]+)['"]?\)/);
      if (urlMatch) {
        const bgSrc = extractOriginalImageUrl(urlMatch[1]);
        info.imageData = {
          src: bgSrc,
          isBackground: true
        };
      }
    }

    // Add button-specific data
    if (elementType === 'Button') {
      info.buttonData = {
        text: element.textContent || element.value || '',
        href: element.getAttribute('href') || element.getAttribute('onclick') || undefined
      };
    }

    // Add link-specific data
    if (elementType === 'Link') {
      info.linkData = {
        text: element.textContent || '',
        href: element.getAttribute('href') || '#'
      };
    }

    // Add text content for Text elements
    if (elementType === 'Text') {
      info.textContent = element.textContent || '';
    }

    return info;
  };
  const isAnimatedTextElement = (element) => {
    if (!element.className) return false;
    try {
      let classNameStr = '';
      if (typeof element.className === 'string') {
        classNameStr = element.className;
      } else if (element.className.baseVal !== undefined) {
        classNameStr = element.className.baseVal;
      }
      if (classNameStr && (
        classNameStr.includes('slide-char') ||
        classNameStr.includes('slide-line') ||
        classNameStr.includes('slide-word') ||
        classNameStr.includes('fade-char') ||
        classNameStr.includes('fade-line') ||
        classNameStr.includes('fade-word')
      )) {
        return true;
      }
    } catch (e) {
      // Ignore errors
    }
    let parent = element.parentElement;
    while (parent && parent !== document.body) {
      if (parent.getAttribute('aria-hidden') === 'true') {
        return true;
      }
      parent = parent.parentElement;
    }
    return false;
  };
  const isValidElement = (element) => {
    if (!element || !element.tagName) return false;
    const tagName = element.tagName.toLowerCase();
    if (invalidElements.includes(tagName)) return false;
    if (element.classList && element.classList.contains('webild-hover-overlay')) return false;
    if (isAnimatedTextElement(element)) return false;

    // Allow hovering on ALL elements (including divs without data-section)
    // The element type label will only show for specific types in showElementTypeLabel()
    return true;
  };
  const isTextElement = (element) => {
    const tagName = element.tagName.toLowerCase();

    // Explicitly exclude div - divs should never be treated as text
    if (tagName === 'div') return false;

    if (!textElements.includes(tagName)) return false;

    if (tagName === 'label' || tagName === 'td' || tagName === 'th') {
      const hasBlockChildren = Array.from(element.children).some(child => {
        const childTag = child.tagName.toLowerCase();
        return ['div', 'section', 'article', 'nav', 'header', 'footer', 'aside', 'main', 'ul', 'ol', 'table', 'form'].includes(childTag);
      });
      if (hasBlockChildren) return false;
    }

    return true;
  };
  const inputHandlers = new WeakMap();
  const makeEditable = (element, clickEvent) => {
    if (!isTextElement(element)) return;
    originalContent = element.textContent;
    element.contentEditable = 'true';
    element.focus();
    isEditing = true;
    window.parent.postMessage({
      type: 'webild-text-editing-started',
      data: { selector: getElementInfo(element).selector }
    }, '*');
    const handleInput = () => {
      if (element.textContent !== originalContent) {
        window.parent.postMessage({
          type: 'webild-text-changed',
          data: {
            selector: getElementInfo(element).selector,
            hasChanges: true
          }
        }, '*');
      }
    };
    inputHandlers.set(element, handleInput);
    element.addEventListener('input', handleInput);
    if (clickEvent && element.childNodes.length > 0) {
      const range = document.caretRangeFromPoint(clickEvent.clientX, clickEvent.clientY);
      if (range) {
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  };
  const makeUneditable = (element, save = false) => {
    if (!element || element.contentEditable !== 'true') return;
    element.contentEditable = 'false';
    isEditing = false;
    const handler = inputHandlers.get(element);
    if (handler) {
      element.removeEventListener('input', handler);
      inputHandlers.delete(element);
    }
    window.parent.postMessage({
      type: 'webild-text-editing-ended',
      data: { selector: getElementInfo(element).selector }
    }, '*');
    if (save && originalContent !== element.textContent) {
      const changeData = {
        selector: getElementInfo(element).selector,
        type: 'text',
        oldValue: originalContent,
        newValue: element.textContent,
        sectionId: getSectionId(element),
        tagName: element.tagName.toLowerCase()
      };
      actualChanges.push(changeData);
      window.parent.postMessage({
        type: 'webild-element-changed',
        data: {
          type: 'updateText',
          selector: getElementInfo(element).selector,
          oldValue: originalContent,
          newValue: element.textContent
        }
      }, '*');
    } else if (!save && originalContent !== null) {
      element.textContent = originalContent;
    }
    originalContent = null;
  };
  let hoverOverlay = null;
  const createHoverOverlay = (element) => {
    const rect = element.getBoundingClientRect();
    const overlay = document.createElement('div');
    overlay.className = 'webild-hover-overlay';
    overlay.style.cssText = \`
      position: fixed !important;
      top: \${rect.top - 2}px !important;
      left: \${rect.left - 2}px !important;
      width: \${rect.width + 4}px !important;
      height: \${rect.height + 4}px !important;
      background-color: rgba(90, 113, 230, 0.25) !important;
      border-radius: 3px !important;
      pointer-events: none !important;
      z-index: 999998 !important;
    \`;
    document.body.appendChild(overlay);
    return overlay;
  };
  const removeHoverOverlay = () => {
    if (hoverOverlay) {
      hoverOverlay.remove();
      hoverOverlay = null;
    }
  };
  const showElementTypeLabel = (element, elementType) => {
    // Only show label for specific element types (not for plain divs or other unclassified elements)
    if (!elementType) return;

    removeElementTypeLabel();

    const rect = element.getBoundingClientRect();
    elementTypeLabel = document.createElement('div');
    elementTypeLabel.className = 'webild-element-type-label';
    elementTypeLabel.textContent = elementType;
    elementTypeLabel.style.cssText = \`
      left: \${rect.left}px;
      top: \${rect.top - 28}px;
    \`;

    // Adjust position if label would go off-screen
    if (rect.top < 35) {
      elementTypeLabel.style.top = \`\${rect.bottom + 4}px\`;
    }

    document.body.appendChild(elementTypeLabel);
  };
  const removeElementTypeLabel = () => {
    if (elementTypeLabel) {
      elementTypeLabel.remove();
      elementTypeLabel = null;
    }
  };
  const showSelectedCategoryLabel = (elementType) => {
    removeSelectedCategoryLabel();
    if (!elementType) return;

    selectedElementCategoryLabel = document.createElement('div');
    selectedElementCategoryLabel.className = 'webild-selected-category-label';
    selectedElementCategoryLabel.textContent = elementType;
    document.body.appendChild(selectedElementCategoryLabel);
  };
  const removeSelectedCategoryLabel = () => {
    if (selectedElementCategoryLabel) {
      selectedElementCategoryLabel.remove();
      selectedElementCategoryLabel = null;
    }
  };
  const handleMouseOver = (e) => {
    if (!isActive || isSaving) return;

    const target = e.target;

    if (!isValidElement(target) || target === hoveredElement || target === selectedElement) {
      return;
    }

    if (hoveredElement && hoveredElement !== selectedElement) {
      hoveredElement.classList.remove(hoverClass);
      if (hoveredElement.dataset.webildOriginalPosition) {
        hoveredElement.style.position = hoveredElement.dataset.webildOriginalPosition === 'none' ? '' : hoveredElement.dataset.webildOriginalPosition;
        delete hoveredElement.dataset.webildOriginalPosition;
      }
      removeHoverOverlay();
      removeElementTypeLabel();
    }

    hoveredElement = target;

    const computedStyle = window.getComputedStyle(target);
    const currentPosition = computedStyle.position;

    if (currentPosition === 'static' || currentPosition === '') {
      hoveredElement.dataset.webildOriginalPosition = currentPosition || 'none';
      hoveredElement.style.position = 'relative';
    }

    hoveredElement.classList.add(hoverClass);

    if ((!selectedElement || selectedElement !== target) && !isScrolling) {
      hoverOverlay = createHoverOverlay(target);
    }

    const elementType = getElementType(target);
    showElementTypeLabel(target, elementType);

    window.parent.postMessage({
      type: 'webild-element-hover',
      data: getElementInfo(target)
    }, '*');
  };
  const handleMouseOut = (e) => {
    if (hoveredElement && hoveredElement !== selectedElement) {
      hoveredElement.classList.remove(hoverClass);

      if (hoveredElement.dataset.webildOriginalPosition) {
        hoveredElement.style.position = hoveredElement.dataset.webildOriginalPosition === 'none' ? '' : hoveredElement.dataset.webildOriginalPosition;
        delete hoveredElement.dataset.webildOriginalPosition;
      }

      removeHoverOverlay();
      removeElementTypeLabel();

      hoveredElement = null;

      window.parent.postMessage({
        type: 'webild-element-hover',
        data: null
      }, '*');
    }
  };
  const handleClick = (e) => {
    if (!isActive || isSaving) return;

    const target = e.target;

    if (!isValidElement(target)) return;

    if (isEditing && selectedElement && selectedElement.contentEditable === 'true') {
      if (target === selectedElement || selectedElement.contains(target)) {
        return;
      }
      makeUneditable(selectedElement, true);
    }

    e.preventDefault();
    e.stopPropagation();

    if (selectedElement && selectedElement !== target) {
      if (selectedElement.contentEditable === 'true') {
        makeUneditable(selectedElement, true);
      }
      selectedElement.classList.remove(selectedClass);
      selectedElement.classList.remove(hoverClass);

      if (selectedElement.dataset.webildOriginalPosition) {
        selectedElement.style.position = selectedElement.dataset.webildOriginalPosition === 'none' ? '' : selectedElement.dataset.webildOriginalPosition;
        delete selectedElement.dataset.webildOriginalPosition;
      }

      removeHoverOverlay();
    }

    if (selectedElement === target) {
      if (target.dataset.webildOriginalPosition) {
        target.style.position = target.dataset.webildOriginalPosition === 'none' ? '' : target.dataset.webildOriginalPosition;
        delete target.dataset.webildOriginalPosition;
      }

      removeHoverOverlay();
      removeSelectedCategoryLabel();

      selectedElement = null;
      window.parent.postMessage({
        type: 'webild-element-selected',
        data: null
      }, '*');
      return;
    }

    selectedElement = target;
    selectedElement.classList.add(selectedClass);

    removeHoverOverlay();

    if (hoveredElement === target) {
      hoveredElement.classList.remove(hoverClass);
      hoveredElement = null;
    }

    const elementInfo = getElementInfo(target);
    const elementType = getElementType(target);

    // Show category label in top-left
    showSelectedCategoryLabel(elementType);

    window.parent.postMessage({
      type: 'webild-element-selected',
      data: elementInfo
    }, '*');

    if (isTextElement(target)) {
      setTimeout(() => makeEditable(target, e), 50);
    }
  };
  const handleKeyDown = (e) => {
    if (!isEditing || !selectedElement) return;
    
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      makeUneditable(selectedElement, true);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      makeUneditable(selectedElement, false);
    }
  };
  const handleBlur = (e) => {
    if (isEditing && selectedElement && e.target === selectedElement) {
      makeUneditable(selectedElement, true);
    }
  };
  let scrollTimeout = null;
  let isScrolling = false;
  
  const handleScroll = () => {
    removeHoverOverlay();
    isScrolling = true;
    
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }
    
    scrollTimeout = setTimeout(() => {
      isScrolling = false;
      if (hoveredElement && (!selectedElement || selectedElement !== hoveredElement)) {
        hoverOverlay = createHoverOverlay(hoveredElement);
      }
    }, 150);
    
    window.parent.postMessage({
      type: 'webild-iframe-scroll'
    }, '*');
  };
  const handleMessage = (e) => {
    if (!e.data || !e.data.type) return;
    if (e.data.type === 'webild-activate-editor') {
      if (!isActive) {
        isActive = true;
        window.parent.postMessage({ type: 'webild-editor-activated' }, '*');
      }
      return;
    }
    if (e.data.type === 'webild-deactivate-editor') {
      if (isActive) {
        isActive = false;
        if (selectedElement) {
          makeUneditable(selectedElement, false);
          selectedElement.classList.remove(selectedClass);
          selectedElement = null;
        }
        if (hoveredElement) {
          hoveredElement.classList.remove(hoverClass);
          hoveredElement = null;
        }
        removeHoverOverlay();
        removeSelectedCategoryLabel();
        window.parent.postMessage({ type: 'webild-editor-deactivated' }, '*');
      }
      return;
    }
    if (e.data.type === 'webild-set-saving') {
      isSaving = e.data.data.isSaving;
      if (isSaving && selectedElement) {
        makeUneditable(selectedElement, false);
        selectedElement.classList.remove(selectedClass);
        selectedElement = null;
      }
      if (isSaving && hoveredElement) {
        hoveredElement.classList.remove(hoverClass);
        hoveredElement = null;
        removeHoverOverlay();
      }
      return;
    }
    if (e.data.type === 'webild-disable-current-editing') {
      if (selectedElement) {
        makeUneditable(selectedElement, false);
        selectedElement.classList.remove(selectedClass);
        selectedElement = null;
      }
      if (hoveredElement) {
        hoveredElement.classList.remove(hoverClass);
        hoveredElement = null;
        removeHoverOverlay();
      }
      return;
    }
    if (e.data.type === 'webild-get-changes') {
      if (selectedElement && selectedElement.contentEditable === 'true') {
        makeUneditable(selectedElement, true);
      }

      window.parent.postMessage({
        type: 'webild-changes-data',
        data: [...actualChanges]
      }, '*');
      actualChanges.length = 0;
      originalValues.clear();
      if (selectedElement) {
        selectedElement.classList.remove(selectedClass);
        selectedElement = null;
      }
      if (hoveredElement) {
        hoveredElement.classList.remove(hoverClass);
        hoveredElement = null;
      }
      removeHoverOverlay();
      return;
    }
    if (e.data.type === 'webild-update-text') {
      const { selector, newValue } = e.data.data;
      const element = document.querySelector(selector);
      if (element) {
        element.textContent = newValue;
      }
      return;
    }
    if (e.data.type === 'webild-update-button') {
      const { selector, label, link } = e.data.data;
      const element = document.querySelector(selector);
      if (element) {
        if (label !== undefined) {
          element.textContent = label;
        }
        if (link !== undefined && element.tagName === 'BUTTON') {
          element.setAttribute('onclick', \`window.location.href='\${link}'\`);
        } else if (link !== undefined && element.tagName === 'A') {
          element.setAttribute('href', link);
        }
      }
      return;
    }
    if (e.data.type === 'webild-apply-changes') {
      const changes = e.data.data;
      if (!changes || !Array.isArray(changes)) return;
      changes.forEach(change => {
        try {
          const element = document.querySelector(change.selector);
          if (!element) return;
          if (change.type === 'text' && change.content !== undefined) {
            element.textContent = change.content;
          } else if (change.type === 'image' && change.src) {
            if (element.tagName === 'IMG') {
              element.src = change.src;
              if (change.alt !== undefined) {
                element.alt = change.alt;
              }
            }
          } else if (change.type === 'backgroundImage' && change.src) {
            element.style.backgroundImage = \`url('\${change.src}')\`;
          }
        } catch (err) {
        }
      });
      window.parent.postMessage({
        type: 'webild-changes-applied',
        data: { count: changes.length }
      }, '*');
      return;
    }
    if (e.data.type === 'webild-replace-image') {
      const { selector, newSrc, isBackground } = e.data.data;

      // Enhanced element finding with better error handling
      let element = document.querySelector(selector);
      let fallbackUsed = false;

      if (!element) {
        // Try simplified selector without nth-of-type
        const simplifiedSelector = selector.replace(/:nth-of-type\(\d+\)/g, '');
        element = document.querySelector(simplifiedSelector);
        if (element) {
          fallbackUsed = true;
        }

        // Try section-based fallback
        if (!element) {
          const sectionMatch = selector.match(/#([a-z-]+)/);
          if (sectionMatch) {
            const sectionId = sectionMatch[1];
            const section = document.getElementById(sectionId);
            if (section) {
              element = section.querySelector('img') || section.querySelector('[style*="background-image"]');
              if (element) {
                fallbackUsed = true;
              }
            }
          }
        }

        // Try finding by tag type in the document
        if (!element && !isBackground) {
          const images = document.querySelectorAll('img');
          if (images.length === 1) {
            element = images[0];
            fallbackUsed = true;
          }
        }

        if (!element) {
          window.parent.postMessage({
            type: 'webild-image-replacement-error',
            data: {
              selector,
              error: 'Element not found',
              message: 'Could not find the target element for image replacement'
            }
          }, '*');
          return;
        }
      }
      if (element) {
        // Validate the new image URL
        if (!newSrc || typeof newSrc !== 'string') {
          window.parent.postMessage({
            type: 'webild-image-replacement-error',
            data: {
              selector,
              error: 'Invalid URL',
              message: 'The provided image URL is invalid'
            }
          }, '*');
          return;
        }

        let oldSrc = '';

        try {
          if (isBackground) {
            const elementSelector = getUniqueSelector(element);
            if (!originalValues.has(elementSelector)) {
              const style = window.getComputedStyle(element);
              const bgImage = style.backgroundImage;
              if (bgImage && bgImage !== 'none') {
                const urlMatch = bgImage.match(/url\(['"]?([^'")]+)['"]?\)/);
                if (urlMatch) {
                  oldSrc = extractOriginalImageUrl(urlMatch[1]);
                }
              }
              originalValues.set(elementSelector, oldSrc || '');
            }
            oldSrc = originalValues.get(elementSelector) || '';
            element.style.backgroundImage = \`url('\${newSrc}')\`;
            const change = {
              selector: elementSelector,
              type: 'backgroundImage',
              oldValue: String(oldSrc),
              newValue: String(newSrc),
              sectionId: getSectionId(element),
              src: newSrc
            };
            actualChanges.push(change);
          } else if (element.tagName === 'IMG') {
            const elementSelector = getUniqueSelector(element);
            if (!originalValues.has(elementSelector)) {
              const rawSrc = element.getAttribute('src') || element.src;
              const originalSrc = extractOriginalImageUrl(rawSrc);
              originalValues.set(elementSelector, originalSrc || '');
            }
            oldSrc = originalValues.get(elementSelector) || '';
            if (!oldSrc) {
              const rawSrc = element.getAttribute('src') || element.src;
              const currentSrc = extractOriginalImageUrl(rawSrc);
              oldSrc = currentSrc || '';
              originalValues.set(elementSelector, oldSrc);
            }

            // Set up error handling for image loading
            const handleImageLoad = () => {
              window.parent.postMessage({
                type: 'webild-image-replaced',
                data: { selector, newSrc, oldSrc, success: true }
              }, '*');
            };

            const handleImageError = () => {
              // Revert to old image
              if (oldSrc) {
                element.src = oldSrc;
                element.setAttribute('src', oldSrc);
              }
              window.parent.postMessage({
                type: 'webild-image-replacement-error',
                data: {
                  selector,
                  error: 'Image load failed',
                  message: 'The new image could not be loaded. Reverted to original image.',
                  newSrc,
                  oldSrc
                }
              }, '*');
            };

            // Add event listeners before changing src
            element.addEventListener('load', handleImageLoad, { once: true });
            element.addEventListener('error', handleImageError, { once: true });

            element.src = newSrc;
            element.setAttribute('src', newSrc);
            element.srcset = '';
            element.removeAttribute('srcset');
            element.style.display = 'none';
            void element.offsetHeight;
            element.style.display = '';

            const change = {
              selector: elementSelector,
              type: 'image',
              oldValue: String(oldSrc),
              newValue: String(newSrc),
              sectionId: getSectionId(element),
              src: newSrc,
              alt: element.alt
            };
            actualChanges.push(change);
            console.log('[Visual Editor] Added image change to actualChanges:', change);
            console.log('[Visual Editor] Total changes now:', actualChanges.length);
          } else {
            console.warn('[Visual Editor] Element is not an image or background element:', element.tagName);
            window.parent.postMessage({
              type: 'webild-image-replacement-error',
              data: {
                selector,
                error: 'Invalid element type',
                message: \`Cannot replace image on \${element.tagName} element\`
              }
            }, '*');
          }
        } catch (error) {
          console.error('[Visual Editor] Error during image replacement:', error);
          window.parent.postMessage({
            type: 'webild-image-replacement-error',
            data: {
              selector,
              error: 'Replacement failed',
              message: 'An error occurred during image replacement: ' + error.message
            }
          }, '*');
        }
      }
    }
    if (e.data.type === 'webild-delete-element') {
      const { selector } = e.data.data;
      const element = document.querySelector(selector);
      if (element) {
        const oldHTML = element.outerHTML;
        const sectionId = getSectionId(element);
        element.remove();
        actualChanges.push({
          selector: selector,
          type: 'delete',
          oldValue: oldHTML,
          newValue: '',
          sectionId: sectionId,
        });
        window.parent.postMessage({
          type: 'webild-element-deleted',
          data: { selector }
        }, '*');
      }
    }
    if (e.data.type === 'webild-cancel-changes') {
      actualChanges.length = 0;
      window.location.reload();
    }
  };
  document.addEventListener('mouseover', handleMouseOver, true);
  document.addEventListener('mouseout', handleMouseOut, true);
  document.addEventListener('click', handleClick, true);
  document.addEventListener('keydown', handleKeyDown, true);
  document.addEventListener('blur', handleBlur, true);
  window.addEventListener('scroll', handleScroll, true);
  window.addEventListener('message', handleMessage, true);
  window.webildCleanup = () => {
    isActive = false;
    if (selectedElement) {
      makeUneditable(selectedElement, false);
    }
    removeHoverOverlay();
    document.removeEventListener('mouseover', handleMouseOver, true);
    document.removeEventListener('mouseout', handleMouseOut, true);
    document.removeEventListener('click', handleClick, true);
    document.removeEventListener('keydown', handleKeyDown, true);
    document.removeEventListener('blur', handleBlur, true);
    window.removeEventListener('scroll', handleScroll, true);
    window.removeEventListener('message', handleMessage, true);
    document.querySelectorAll('.' + hoverClass).forEach(el => {
      el.classList.remove(hoverClass);
    });
    document.querySelectorAll('.' + selectedClass).forEach(el => {
      el.classList.remove(selectedClass);
    });
    const styleEl = document.getElementById('webild-inspector-styles');
    if (styleEl) styleEl.remove();
    hoveredElement = null;
    selectedElement = null;
  };
  window.parent.postMessage({ type: 'webild-editor-ready' }, '*');
})();
`
          }}
        />
      </body>
    </PostHogWrapper>
    </html>
  );
}