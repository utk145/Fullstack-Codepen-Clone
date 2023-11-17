import React, { useState } from 'react'
import SplitPane from 'react-split-pane'
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { tomorrowNightBlue } from "@uiw/codemirror-theme-tomorrow-night-blue";


const CreateNewProj = () => {
    const [htmlVal, sethtmlVal] = useState(``);
    const [cssVal, setcssVal] = useState(``);
    const [jsVal, setjsVal] = useState(``);
    const [finalSrcCodeOutput, setfinalSrcCodeOutput] = useState(``);

    const updateResFunction = () => {
        const mergedOutput = `
            <html>
                <body>${htmlVal}</body>
                <style>${cssVal}</style>
                <script>${jsVal}</script>
            </html>
        `;
        setfinalSrcCodeOutput(mergedOutput);
    }


    React.useEffect(() => {
        const timeout = setTimeout(() => {
            updateResFunction()
        }, 1000);

        return () => clearTimeout(timeout);
    }, [htmlVal, cssVal, jsVal])


    return (
        <>
            <div className='flex flex-col w-screen min-h-screen items-start justify-start overflow-hidden '>
                {/* Header section */}
                <div className=''>
                    <SplitPane split='horizontal' allowResize={true} minSize={100} maxSize={100} defaultSize={"50%"}>

                        {/* Coding area */}
                        <SplitPane split='vertical' minSize={500}>

                            <div className='w-full h-full flex flex-col items-start justify-start'>
                                <div className='bg-[rgba(27,27,83,.8)] w-full flex items-center justify-between'>
                                    <div className='bg-[#1c1a1a] px-4 py-2 flex items-center justify-center gap-3 text-[#868CA0] font-semibold'>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" class="text-2xl text-red-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"></path></svg>
                                        <span>HTML</span>
                                    </div>

                                </div>
                                <div className='w-full px-0'>
                                    {/* Code mirror area */}
                                    <CodeMirror height="600px" extensions={[javascript({ jsx: true })]} value={htmlVal} onChange={(val, viewUpdate) => {
                                        sethtmlVal(val);
                                        // console.log("html val is " + val);
                                    }} theme={tomorrowNightBlue} className='border-t-2 border-[#092a63]' />
                                </div>
                            </div>

                            <SplitPane split='vertical' minSize={500}>
                                <div className='w-full h-full flex flex-col items-start justify-start'>
                                    <div className='bg-[rgba(27,27,83,.8)] w-full flex items-center justify-between'>
                                        <div className='bg-[#1c1a1a] px-4 py-2 flex items-center justify-center gap-3 text-[#868CA0] font-semibold'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" class="text-2xl text-blue-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z"></path></svg>
                                            <span>CSS</span>
                                        </div>
                                    </div>

                                    {/* Code mirror area */}
                                    <div className='w-full px-0'>
                                        {/* Code mirror area */}
                                        <CodeMirror height="600px" extensions={[javascript({ jsx: true })]} value={cssVal} onChange={(val, viewUpdate) => {
                                            setcssVal(val);
                                            // console.log("css val is " + val);
                                        }} theme={tomorrowNightBlue} className='border-t-2 border-[#092a63]' />
                                    </div>

                                </div>
                                <div className='w-full h-full flex flex-col items-start justify-start'>
                                    <div className='bg-[rgba(27,27,83,.8)] w-full flex items-center justify-between'>
                                        <div className='bg-[#1c1a1a] px-4 py-2 flex items-center justify-center gap-3 text-[#868CA0] font-semibold'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" class="text-2xl text-yellow-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"></path></svg>
                                            <span>JavaScript</span>
                                        </div>
                                    </div>

                                    {/* Code mirror area */}
                                    <div className='w-full px-0'>
                                        {/* Code mirror area */}
                                        <CodeMirror height="600px" extensions={[javascript({ jsx: true })]} value={jsVal} onChange={(val, viewUpdate) => {
                                            setjsVal(val);
                                            // console.log("js val is " + val);
                                        }} theme={tomorrowNightBlue} className='border-t-2 border-[#092a63]' />
                                    </div>

                                </div>
                            </SplitPane>

                        </SplitPane>

                        {/* Display area */}
                        <div className='bg-white' style={{ overflow: "hidden", height: "100%" }}>
                            <iframe
                                srcDoc={finalSrcCodeOutput}
                                title="output"
                                sandbox="allow-scripts"
                                width="100%"
                                height="100%"
                                style={{ border: "none" }}
                            />
                        </div>
                    </SplitPane>
                </div>
            </div>
        </>
    )
}

export default CreateNewProj