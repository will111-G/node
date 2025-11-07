export default {
  async fetch(request) {
    const url = new URL(request.url);
    const format = url.searchParams.get('format') || 'clash';
    const raw = "https://url.v1.mk/sub?target=auto&url=https%3A%2F%2Fdy.lhineor.filegear-sg.me%2F27085a5a-49b8-43ff-a624-74fbf13420cf%2F&insert=false";

    const targets = {
      clash: 'clash',
      surge: 'surge',
      singbox: 'singbox',
      v2ray: 'v2ray'
    };

    const target = targets[format] || 'clash';
    return fetch(`https://url.v1.mk/sub?target=${target}&url=${encodeURIComponent(raw)}`);
  }
}
