// import { ChatBody } from "./components/chat-ia/ChatBody";
import { SidebarChatIa } from "./components/chat-ia/SidebarChatIa";

export const ChatIAPage = () => {
  return (
    <>
      <div className="w-full h-screen flex overflow-hidden ">
        <div className="w-3/4 h-full  py-6  px-2 ">{/* <ChatBody /> */}</div>
        <aside className="w-1/4 ml-14 py-6 px-2">
          <SidebarChatIa />
        </aside>
      </div>
    </>
  );
};
