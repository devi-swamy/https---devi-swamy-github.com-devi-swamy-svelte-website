<script>
  export let item;
  export let lazy = false;

  let src = item;
  let observer = null;

  if (lazy) {
    src = "";
    observer = new IntersectionObserver(onIntersect, { rootMargin: "200px" });
  }

  function onIntersect(entries) {
    if (!src && entries[0].isIntersecting) {
      src = item;
    }
  }

  function lazyLoad(node) {
    observer && observer.observe(node);
    return {
      destroy() {
        observer && observer.unobserve(node);
      }
    };
  }
</script>

<article use:lazyLoad>
  <img {src} alt="outdoor" />
</article>

<style>
  article {
    width: 290px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 200px;
    margin-left: 2%;
    margin-bottom: 0.5rem;
  }
</style>
