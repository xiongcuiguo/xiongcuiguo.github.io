diff --git a/source/js/src/utils.js b/source/js/src/utils.js
index 0f3704e..8516665 100644
--- a/source/js/src/utils.js
+++ b/source/js/src/utils.js
@@ -11,6 +11,7 @@ NexT.utils = NexT.$u = {
       .not('.group-picture img, .post-gallery img')
       .each(function() {
         var $image = $(this);
+        if ($(this).hasClass('nofancybox')) return;
         var imageTitle = $image.attr('title');
         var $imageWrapLink = $image.parent('a');