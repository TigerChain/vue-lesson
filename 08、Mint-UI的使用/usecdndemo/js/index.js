var vm = new Vue({
    el: '#container',
    data: {
        actions: [],
        sheetVisible: false,
    },
    created() {
    	this.actions = [
    	 	{
	            name: '拍照',
	            method: this.takePhoto
	        }, 
	        {
	            name: '打开图库',
	            method: this.openLibrary
	        }, 
    	]
    },
    methods: {
        takePhoto() {
            console.log('我是拍照')
        },
        openLibrary() {
        	console.log('我是找开图库')
        }
    }
})