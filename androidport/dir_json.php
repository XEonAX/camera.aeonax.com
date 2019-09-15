<?php
// grab the files
function dir2json($dir)
{
    $a = [];
    if ($handler = opendir($dir)) {
        while (($content = readdir($handler)) !== FALSE) {
            if (!in_array($content, [".", "..", ".ftpquota", "index.html", "list_json.php", "dir_json.php"])) {
                if (is_file($dir . "/" . $content)) {
                    $a['tag'] = str_replace("/home/publicap/public_html/anxmirror/", "", $dir);
                    $a['file'] = $content;
                    $a['size'] = filesize($dir . "/" . $content);
                    $a['time'] = filectime($dir . "/" . $content);
                    $a['ver'] = intval($a['tag']);
                } else if (is_dir($dir . "/" . $content)) $a[] = dir2json($dir . "/" . $content);
            }
        }
        closedir($handler);
    }
    return $a;
}

$files = dir2json(dirname(__FILE__));

// out we go
header("Content-type: application/json");
echo json_encode($files);
