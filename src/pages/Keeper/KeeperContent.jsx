function KeeperContent() {
  return (
    <div className="p-4 flex flex-col justify-start items-center gap-6">
      <div className="card border-2 h-[200px] w-[400px] rounded-lg">
        <form action="post" className="flex flex-col p-4 gap-2 h-full">
          <input type="text" placeholder="title" className="bg-gray-200" />
          <input
            type="text"
            class="w-full h-full bg-gray-200"
            placeholder="Your name"
          />
        </form>
      </div>
      <div className="grid grid-cols-4 gap-4 overflow-hidden ">
        <div className="mul-card border-2 h-[100px] w-[200px] rounded-lg"></div>
        <div className="mul-card border-2 h-[100px] w-[200px]"></div>
        <div className="mul-card border-2 h-[100px] w-[200px]"></div>
        <div className="mul-card border-2 h-[100px] w-[200px]"></div>
        <div className="mul-card border-2 h-[100px] w-[200px]"></div>
        <div className="mul-card border-2 h-[100px] w-[200px]"></div>
      </div>
    </div>
  );
}
export default KeeperContent;
