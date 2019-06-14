#!/bin/bash

readonly DIST_DIR="dist";
readonly LIB_DIR="lib";

if [ -d ${DIST_DIR} ]; then
  rm -r ${DIST_DIR};
fi

# Compile TypeScript files
tsc -p tsconfig.json;

# Move JavaScript and TypeScript declaration files to dist
cp ${LIB_DIR}/axes/*{.js,*.d.ts} ${DIST_DIR}/axes/.
cp ${LIB_DIR}/data/*{.js,*.d.ts} ${DIST_DIR}/data/.
cp ${LIB_DIR}/legend/*{.js,*.d.ts} ${DIST_DIR}/legend/.
cp ${LIB_DIR}/options/*{.js,*.d.ts} ${DIST_DIR}/options/.
cp ${LIB_DIR}/plot/*{.js,*.d.ts} ${DIST_DIR}/plot/.
cp ${LIB_DIR}/save/*{.js,*.d.ts} ${DIST_DIR}/save/.
cp ${LIB_DIR}/util/*{.js,*.d.ts} ${DIST_DIR}/util/.
cp ${LIB_DIR}/view/*{.js,*.d.ts} ${DIST_DIR}/view/.
