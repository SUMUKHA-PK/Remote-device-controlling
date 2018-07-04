function get_size(folder_path){
    const getSize = require('get-folder-size');
    getSize(folder_path, (err, size) => {
        if (err) { throw err; }
      });
}