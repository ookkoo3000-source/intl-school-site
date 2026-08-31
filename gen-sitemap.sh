#!/usr/bin/env bash
# 사이트맵 재생성: 저널 글 추가 후 `bash gen-sitemap.sh` 실행하고 커밋
set -e
cd "$(dirname "$0")"
BASE="https://intl.primeadmit.co.kr"
TODAY=$(date +%F)

{
  echo '<?xml version="1.0" encoding="UTF-8"?>'
  echo '<urlset xmlns="http://www.sitemap.org/schemas/sitemap/0.9">' | sed 's#www.sitemap.org#www.sitemaps.org#'
  for f in $(ls -1 *.html | sort); do
    # lastmod = 파일의 git 최근 커밋 날짜(없으면 오늘)
    lm=$("/c/Program Files/Git/bin/git.exe" log -1 --format=%cs -- "$f" 2>/dev/null || true)
    [ -z "$lm" ] && lm="$TODAY"
    case "$f" in
      index.html) prio="1.0" ;;
      journal.html|schools.html|teachers.html) prio="0.8" ;;
      journal-*.html) prio="0.7" ;;
      *) prio="0.6" ;;
    esac
    echo "  <url><loc>$BASE/$f</loc><lastmod>$lm</lastmod><priority>$prio</priority></url>"
  done
  echo '</urlset>'
} > sitemap.xml

echo "sitemap.xml: $(grep -c '<url>' sitemap.xml) URLs"
