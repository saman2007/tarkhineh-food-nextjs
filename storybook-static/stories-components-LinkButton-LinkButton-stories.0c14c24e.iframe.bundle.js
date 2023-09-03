"use strict";(self.webpackChunktarkhine_food=self.webpackChunktarkhine_food||[]).push([[141],{"./src/stories/components/LinkButton/LinkButton.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Fill:()=>Fill,Normal:()=>Normal,Outline:()=>Outline,default:()=>LinkButton_stories});var Button=__webpack_require__("./src/data/variants/Button.ts"),objectWithoutProperties=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),Button_Button=__webpack_require__("./src/components/Button/Button.tsx"),esm_extends=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/extends.js"),next_link=__webpack_require__("./node_modules/.pnpm/next@13.4.12_@babel+core@7.22.9_react-dom@18.2.0_react@18.2.0/node_modules/next/link.js"),link_default=__webpack_require__.n(next_link),_excluded=["prefetch","children"],__jsx=react.createElement,Link=function Link(_ref){var _ref$prefetch=_ref.prefetch,prefetch=void 0!==_ref$prefetch&&_ref$prefetch,children=_ref.children,props=(0,objectWithoutProperties.Z)(_ref,_excluded);return __jsx(link_default(),(0,esm_extends.Z)({prefetch},props),children)};Link.displayName="Link",Link.__docgenInfo={description:"",methods:[],displayName:"Link",props:{prefetch:{defaultValue:{value:"false",computed:!1},required:!1}}};const Link_Link=Link;try{Link.displayName="Link",Link.__docgenInfo={description:"",displayName:"Link",props:{href:{defaultValue:null,description:"The path or URL to navigate to. It can also be an object.\n@example https://nextjs.org/docs/api-reference/next/link#with-url-object",name:"href",required:!0,type:{name:"Url"}},as:{defaultValue:null,description:"Optional decorator for the path that will be shown in the browser URL bar. Before Next.js 9.5.3 this was used for dynamic routes, check our [previous docs](https://github.com/vercel/next.js/blob/v9.5.2/docs/api-reference/next/link.md#dynamic-routes) to see how it worked. Note: when this path differs from the one provided in `href` the previous `href`/`as` behavior is used as shown in the [previous docs](https://github.com/vercel/next.js/blob/v9.5.2/docs/api-reference/next/link.md#dynamic-routes).",name:"as",required:!1,type:{name:"Url"}},replace:{defaultValue:null,description:"Replace the current `history` state instead of adding a new url into the stack.\n@defaultValue `false`",name:"replace",required:!1,type:{name:"boolean"}},scroll:{defaultValue:null,description:"Whether to override the default scroll behavior\n@example https://nextjs.org/docs/api-reference/next/link#disable-scrolling-to-the-top-of-the-page\n@defaultValue `true`",name:"scroll",required:!1,type:{name:"boolean"}},shallow:{defaultValue:null,description:"Update the path of the current page without rerunning [`getStaticProps`](/docs/basic-features/data-fetching/get-static-props.md), [`getServerSideProps`](/docs/basic-features/data-fetching/get-server-side-props.md) or [`getInitialProps`](/docs/api-reference/data-fetching/get-initial-props.md).\n@defaultValue `false`",name:"shallow",required:!1,type:{name:"boolean"}},passHref:{defaultValue:null,description:"Forces `Link` to send the `href` property to its child.\n@defaultValue `false`",name:"passHref",required:!1,type:{name:"boolean"}},prefetch:{defaultValue:{value:"false"},description:"Prefetch the page in the background.\nAny `<Link />` that is in the viewport (initially or through scroll) will be preloaded.\nPrefetch can be disabled by passing `prefetch={false}`. When `prefetch` is set to `false`, prefetching will still occur on hover. Pages using [Static Generation](/docs/basic-features/data-fetching/get-static-props.md) will preload `JSON` files with the data for faster page transitions. Prefetching is only enabled in production.\n@defaultValue `true`",name:"prefetch",required:!1,type:{name:"boolean"}},locale:{defaultValue:null,description:"The active locale is automatically prepended. `locale` allows for providing a different locale.\nWhen `false` `href` has to include the locale as the default behavior is disabled.",name:"locale",required:!1,type:{name:"string | false"}},legacyBehavior:{defaultValue:null,description:"Enable legacy link behavior.\n@defaultValue `false`\n@see https://github.com/vercel/next.js/commit/489e65ed98544e69b0afd7e0cfc3f9f6c2b803b7",name:"legacyBehavior",required:!1,type:{name:"boolean"}},onMouseEnter:{defaultValue:null,description:"Optional event handler for when the mouse pointer is moved onto Link",name:"onMouseEnter",required:!1,type:{name:"MouseEventHandler<HTMLAnchorElement>"}},onTouchStart:{defaultValue:null,description:"Optional event handler for when Link is touched.",name:"onTouchStart",required:!1,type:{name:"TouchEventHandler<HTMLAnchorElement>"}},onClick:{defaultValue:null,description:"Optional event handler for when Link is clicked.",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLAnchorElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Link/Link.tsx#Link"]={docgenInfo:Link.__docgenInfo,name:"Link",path:"src/components/Link/Link.tsx#Link"})}catch(__react_docgen_typescript_loader_error){}var LinkButton_excluded=["children","variant","radiusVariant","fontVariant","colorVariant","height","width"],LinkButton_jsx=react.createElement;function LinkButton(_ref){var children=_ref.children,variant=_ref.variant,radiusVariant=_ref.radiusVariant,fontVariant=_ref.fontVariant,colorVariant=_ref.colorVariant,height=_ref.height,width=_ref.width,props=(0,objectWithoutProperties.Z)(_ref,LinkButton_excluded);return LinkButton_jsx(Link_Link,props,LinkButton_jsx(Button_Button.Z,{variant,radiusVariant,fontVariant,colorVariant,height,width},children))}LinkButton.displayName="LinkButton",LinkButton.__docgenInfo={description:"a LinkButton component with UI of Button component and Next Link component with different variants",methods:[],displayName:"LinkButton",composes:["ButtonProps","CustomLinkProps"]};const LinkButton_LinkButton=LinkButton;try{LinkButton.displayName="LinkButton",LinkButton.__docgenInfo={description:"a LinkButton component with UI of Button component and Next Link component with different variants",displayName:"LinkButton",props:{variant:{defaultValue:null,description:"the main variant of component",name:"variant",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"fill"'},{value:'"outline"'}]}},colorVariant:{defaultValue:null,description:"each main variant has some color variants and you can set the color variant of a main variant here",name:"colorVariant",required:!1,type:{name:"string | number | symbol"}},radiusVariant:{defaultValue:null,description:"a number that will be in use in border-radius of button",name:"radiusVariant",required:!1,type:{name:"enum",value:[{value:"0"},{value:"4"},{value:"8"}]}},fontVariant:{defaultValue:null,description:"fonts that are available for Button component.",name:"fontVariant",required:!1,type:{name:"enum",value:[{value:'"captionMd"'},{value:'"captionSmAndBtnLg"'},{value:'"captionMdAndBtnLg"'},{value:'"captionLgAndCaptionSm"'}]}},isLoading:{defaultValue:null,description:"the state of loading in button. if it is true, a loading spinner will be displayed at the center of button instead of displaying children",name:"isLoading",required:!1,type:{name:"boolean"}},height:{defaultValue:null,description:"height of element. if it is number, it will be concatinated with px, else it will be used itself",name:"height",required:!1,type:{name:"string | number"}},width:{defaultValue:null,description:"width of element. if it is number, it will be concatinated with px, else it will be used itself",name:"width",required:!1,type:{name:"string | number"}},href:{defaultValue:null,description:"The path or URL to navigate to. It can also be an object.\n@example https://nextjs.org/docs/api-reference/next/link#with-url-object",name:"href",required:!0,type:{name:"Url"}},as:{defaultValue:null,description:"Optional decorator for the path that will be shown in the browser URL bar. Before Next.js 9.5.3 this was used for dynamic routes, check our [previous docs](https://github.com/vercel/next.js/blob/v9.5.2/docs/api-reference/next/link.md#dynamic-routes) to see how it worked. Note: when this path differs from the one provided in `href` the previous `href`/`as` behavior is used as shown in the [previous docs](https://github.com/vercel/next.js/blob/v9.5.2/docs/api-reference/next/link.md#dynamic-routes).",name:"as",required:!1,type:{name:"Url"}},replace:{defaultValue:null,description:"Replace the current `history` state instead of adding a new url into the stack.\n@defaultValue `false`",name:"replace",required:!1,type:{name:"boolean"}},scroll:{defaultValue:null,description:"Whether to override the default scroll behavior\n@example https://nextjs.org/docs/api-reference/next/link#disable-scrolling-to-the-top-of-the-page\n@defaultValue `true`",name:"scroll",required:!1,type:{name:"boolean"}},shallow:{defaultValue:null,description:"Update the path of the current page without rerunning [`getStaticProps`](/docs/basic-features/data-fetching/get-static-props.md), [`getServerSideProps`](/docs/basic-features/data-fetching/get-server-side-props.md) or [`getInitialProps`](/docs/api-reference/data-fetching/get-initial-props.md).\n@defaultValue `false`",name:"shallow",required:!1,type:{name:"boolean"}},passHref:{defaultValue:null,description:"Forces `Link` to send the `href` property to its child.\n@defaultValue `false`",name:"passHref",required:!1,type:{name:"boolean"}},prefetch:{defaultValue:null,description:"Prefetch the page in the background.\nAny `<Link />` that is in the viewport (initially or through scroll) will be preloaded.\nPrefetch can be disabled by passing `prefetch={false}`. When `prefetch` is set to `false`, prefetching will still occur on hover. Pages using [Static Generation](/docs/basic-features/data-fetching/get-static-props.md) will preload `JSON` files with the data for faster page transitions. Prefetching is only enabled in production.\n@defaultValue `true`",name:"prefetch",required:!1,type:{name:"boolean"}},locale:{defaultValue:null,description:"The active locale is automatically prepended. `locale` allows for providing a different locale.\nWhen `false` `href` has to include the locale as the default behavior is disabled.",name:"locale",required:!1,type:{name:"string | false"}},legacyBehavior:{defaultValue:null,description:"Enable legacy link behavior.\n@defaultValue `false`\n@see https://github.com/vercel/next.js/commit/489e65ed98544e69b0afd7e0cfc3f9f6c2b803b7",name:"legacyBehavior",required:!1,type:{name:"boolean"}},onMouseEnter:{defaultValue:null,description:"Optional event handler for when the mouse pointer is moved onto Link",name:"onMouseEnter",required:!1,type:{name:"MouseEventHandler<HTMLAnchorElement>"}},onTouchStart:{defaultValue:null,description:"Optional event handler for when Link is touched.",name:"onTouchStart",required:!1,type:{name:"TouchEventHandler<HTMLAnchorElement>"}},onClick:{defaultValue:null,description:"Optional event handler for when Link is clicked.",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLAnchorElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/LinkButton/LinkButton.tsx#LinkButton"]={docgenInfo:LinkButton.__docgenInfo,name:"LinkButton",path:"src/components/LinkButton/LinkButton.tsx#LinkButton"})}catch(__react_docgen_typescript_loader_error){}var defaultArgs={height:48,width:150,radiusVariant:4,children:"Link Button!",href:"/page/test",onMouseEnter:void 0,onTouchStart:void 0,onClick:void 0},allColorVariantsField=Object.keys(Button.Jj).reduce((function(prevValue,currentValue){var prevValueLength=Object.keys(prevValue).length;return Object.keys(currentValue).length>prevValueLength?currentValue:prevValue})),meta={component:LinkButton_LinkButton,tags:["autodocs"],args:defaultArgs,title:"Components/LinkButton",argTypes:{variant:{control:"select"},colorVariant:{options:Object.keys(Button.Jj[allColorVariantsField])},fontVariant:{control:"select"},radiusVariant:{control:"select"}}},Normal={args:{variant:"normal",colorVariant:"primary"},parameters:{backgrounds:{default:"dawn"}}},Fill={args:{variant:"fill",colorVariant:"primary"},parameters:{backgrounds:{default:"morning"}}},Outline={args:{variant:"outline",colorVariant:"primary"},parameters:{backgrounds:{default:"night"}}};const LinkButton_stories=meta},"./src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_Button_Button});var esm_extends=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/extends.js"),defineProperty=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),Button=__webpack_require__("./src/data/variants/Button.ts"),__jsx=react.createElement,LoadingIcon=function LoadingIcon(props){return __jsx("svg",(0,esm_extends.Z)({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",style:{margin:"auto",display:"block",shapeRendering:"auto"},width:"24px",height:"24px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},props),__jsx("circle",{cx:50,cy:50,fill:"none",stroke:"#ffffff",strokeWidth:8,r:35,strokeDasharray:"164.93361431346415 56.97787143782138"},__jsx("animateTransform",{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"2.6315789473684212s",values:"0 50 50;360 50 50",keyTimes:"0;1"})))};LoadingIcon.displayName="LoadingIcon",LoadingIcon.__docgenInfo={description:"",methods:[],displayName:"LoadingIcon"};const Icons_LoadingIcon=LoadingIcon;try{LoadingIcon.displayName="LoadingIcon",LoadingIcon.__docgenInfo={description:"",displayName:"LoadingIcon",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Icons/LoadingIcon.tsx#LoadingIcon"]={docgenInfo:LoadingIcon.__docgenInfo,name:"LoadingIcon",path:"src/components/Icons/LoadingIcon.tsx#LoadingIcon"})}catch(__react_docgen_typescript_loader_error){}var _excluded=["children","variant","height","width","radiusVariant","fontVariant","colorVariant","className","style","isLoading"],Button_jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function Button_Button(_ref){var children=_ref.children,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"normal":_ref$variant,_ref$height=_ref.height,height=void 0===_ref$height?"auto":_ref$height,_ref$width=_ref.width,width=void 0===_ref$width?"auto":_ref$width,_ref$radiusVariant=_ref.radiusVariant,radiusVariant=void 0===_ref$radiusVariant?0:_ref$radiusVariant,_ref$fontVariant=_ref.fontVariant,fontVariant=void 0===_ref$fontVariant?"captionSmAndBtnLg":_ref$fontVariant,_ref$colorVariant=_ref.colorVariant,colorVariant=void 0===_ref$colorVariant?"primary":_ref$colorVariant,className=_ref.className,style=_ref.style,_ref$isLoading=_ref.isLoading,isLoading=void 0!==_ref$isLoading&&_ref$isLoading,props=(0,objectWithoutProperties.Z)(_ref,_excluded);return Button_jsx("button",(0,esm_extends.Z)({className:"transition duration-300 flex justify-center items-center ".concat(Button.oW[variant]," ").concat(Button.Ui[radiusVariant]," ").concat(Button.jd[fontVariant]," ").concat(className||""," ").concat(Button.Jj[variant][colorVariant]),style:_objectSpread({height:"number"==typeof height?height+"px":height,width:"number"==typeof width?width+"px":width},style||{})},props),isLoading?Button_jsx(Icons_LoadingIcon,null):children)}Button_Button.displayName="Button",Button_Button.__docgenInfo={description:"a Button component with different variants",methods:[],displayName:"Button",props:{variant:{defaultValue:{value:'"normal"',computed:!1},required:!1},height:{defaultValue:{value:'"auto"',computed:!1},required:!1},width:{defaultValue:{value:'"auto"',computed:!1},required:!1},radiusVariant:{defaultValue:{value:"0",computed:!1},required:!1},fontVariant:{defaultValue:{value:'"captionSmAndBtnLg"',computed:!1},required:!1},colorVariant:{defaultValue:{value:'"primary"',computed:!1},required:!1},isLoading:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["ButtonProps","DetailedHTMLProps"]};const components_Button_Button=Button_Button;try{Button_Button.displayName="Button",Button_Button.__docgenInfo={description:"a Button component with different variants",displayName:"Button",props:{variant:{defaultValue:{value:"normal"},description:"the main variant of component",name:"variant",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"fill"'},{value:'"outline"'}]}},colorVariant:{defaultValue:{value:"primary"},description:"each main variant has some color variants and you can set the color variant of a main variant here",name:"colorVariant",required:!1,type:{name:"string | number | symbol"}},radiusVariant:{defaultValue:{value:"0"},description:"a number that will be in use in border-radius of button",name:"radiusVariant",required:!1,type:{name:"enum",value:[{value:"0"},{value:"4"},{value:"8"}]}},fontVariant:{defaultValue:{value:"captionSmAndBtnLg"},description:"fonts that are available for Button component.",name:"fontVariant",required:!1,type:{name:"enum",value:[{value:'"captionMd"'},{value:'"captionSmAndBtnLg"'},{value:'"captionMdAndBtnLg"'},{value:'"captionLgAndCaptionSm"'}]}},isLoading:{defaultValue:{value:"false"},description:"the state of loading in button. if it is true, a loading spinner will be displayed at the center of button instead of displaying children",name:"isLoading",required:!1,type:{name:"boolean"}},height:{defaultValue:{value:"auto"},description:"height of element. if it is number, it will be concatinated with px, else it will be used itself",name:"height",required:!1,type:{name:"string | number"}},width:{defaultValue:{value:"auto"},description:"width of element. if it is number, it will be concatinated with px, else it will be used itself",name:"width",required:!1,type:{name:"string | number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button_Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/data/variants/Button.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Jj:()=>colorVariants,Ui:()=>radiusVariants,jd:()=>fontVariants,oW:()=>variants});var variants={normal:"",fill:"py-8 px-8 sd:px-16 flex justify-center items-center gap-[8px]",outline:"py-8 px-16 sd:px-16 flex justify-center items-center bg-transparent border border-solid "},radiusVariants={0:"",4:"rounded-4",8:"rounded-8"},fontVariants={captionMd:"font-caption-md",captionSmAndBtnLg:"font-caption-sm sd:font-button-lg",captionMdAndBtnLg:"font-caption-md sd:font-button-lg",captionLgAndCaptionSm:"font-caption-sm sd:font-caption-lg"},colorVariants={normal:{primary:""},fill:{primary:"hover:bg-shade-1 bg-primary text-white"},outline:{primary:"border-white text-white hover:bg-white hover:text-primary",secondary:"border-shade-2 text-shade-2 hover:bg-shade-2 hover:text-white",tertiary:"border-gray-7 text-gray-1 hover:bg-gray-7"}}}}]);