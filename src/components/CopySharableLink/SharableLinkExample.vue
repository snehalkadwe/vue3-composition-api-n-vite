<template>
  <div>
      <h3>Example to Copy Sharable Link</h3>
        <ul v-for="post in posts" :key="post.id">
            <div class="border shadow-lg border-blue-500 w-1/3 my-2 mx-auto p-4 rounded">
                <li class="my-2">{{ post.title }}</li>
                <li class="my-2">{{ post.body }}</li>
                <li class="my-2"> <a @click="copyLink(post.id)" href="#" class="border border-green-400 bg-green-200 rounded p-1">http://www.ex.com/{{ post.slug }}</a>
                <br>
                <input type="hidden" :value="`http://www.ex.com/${ post.slug }`" :id="`copySharableLink-${post.id}`">
                
                </li>
            </div>
        </ul>
      <input type="text" v-model="shareLink" id="">
      <button></button>
  </div>
</template>

<script>
export default {
    data () {
        return {
            posts: [
                {
                    id: 1,
                    title: 'Post 1',
                    body: 'my first post',
                    slug: 'post-1'
                },
                {
                    id: 2,
                    title: 'Post 2',
                    body: 'my second post',
                    slug: 'post-2'
                },
                {
                    id: 3,
                    title: 'Post 3',
                    body: 'my third post',
                    slug: 'post-3'
                },
                {
                    id: 4,
                    title: 'Post 4',
                    body: 'my fourth post',
                    slug: 'post-4'
                },
            ]
        }
    },
    methods: {
        copyLink(id) {
            let copyText = document.querySelector(`#copySharableLink-${id}`);
            // copyText.setAttribute('type', 'text');
            copyText.select();
            // document.execCommand('copy'); // function is deprecated
            navigator.clipboard.writeText(copyText.value);
            // copyText.setAttribute('type', 'hidden');
        }
    }

}
</script>

<style>

</style>