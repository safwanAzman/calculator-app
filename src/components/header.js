import { Children } from "react";

export default function header({themeIndex ,children}) {
    return(
    <>
    <div className="flex items-end justify-between ">
        <div>
            <h1 className={`myFont text-[32px] text-textTheme${themeIndex}-text3`}>calc</h1>
        </div>
        <div className="flex items-end space-x-4">
            <h1 className={`myFont text-base text-textTheme${themeIndex}-text3`}>THEME</h1>
            <div className="relative flex flex-col items-center space-x-1">
                <div className={`text-textTheme${themeIndex}-text3 myFont text-sm `}>
                    <label htmlFor="1" className={'w-5  absolute left-1 cursor-pointer h-12 -top-5 text-center' }>1</label>
                    <label htmlFor="2" className={'w-5 absolute left-8 cursor-pointer h-12 -top-5 text-center'}>2</label>
                    <label htmlFor="3" className={'w-5 absolute right-1 cursor-pointer h-12 -top-5 text-center'}>3</label>
                </div>
                <div className={`bg-bgTheme${themeIndex}-keypadBg rounded-full flex justify-around  px-1 py-1 w-[5rem] cursor-pointer `}>
                    <label htmlFor="1" className={themeIndex == 1 ? 'w-4 h-4 rounded-full bg-keysTheme1-keyToggleBg1 -ml-2'  : 'invisible' } ></label>
                    <label htmlFor="2" className={themeIndex == 2 ? 'w-4 h-4 rounded-full bg-keysTheme2-keyToggleBg1 -ml-1'  : 'invisible' }></label>
                    <label htmlFor="3" className={themeIndex == 3 ? 'w-4 h-4 rounded-full bg-keysTheme3-keyToggleBg1 -mr-2'  : 'invisible' }></label>
                    {children}
                </div>
            </div>
        </div>
    </div>
    </>
    )

}