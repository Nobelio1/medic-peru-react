import { ChatBody } from "./components/chat-ia/ChatBody";
// import { SidebarChatIa } from './components/chat-ia/SidebarChatIa';

export const ChatIAPage = () => {
  return (
    <>
      <div className="w-full h-screen flex overflow-hidden ">
        <div className="w-full h-full py-8 px-4"><ChatBody /></div>
        <aside className="hidden w-32 ml-14 py-8 px-2">

        </aside>
      </div>
    </>
  );
};
