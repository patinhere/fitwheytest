function NotiText() {
  return (
    <div>
      <div
        class="pd-noti-float"
        className="h-7  bg-slate-600 text-slate-200 mb-1"
      >
        <span class="noti-text" className="flex place-content-center text-sm">
          <img src="assets/img/icon/mini-noti-icon.svg" /> This product was last
          placed 2 minutes ago from Nonthaburi
        </span>
      </div>
    </div>
  );
}

export default NotiText;
