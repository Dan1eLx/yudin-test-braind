"use strict";

import gulp from "gulp";
const smartgrid = require("smart-grid");

gulp.task("smart-grid", (cb) => {
    smartgrid("./src/styles/vendor/import/", {
        outputStyle: "scss",
        filename: "_smart-grid",
        columns: 12, // number of grid columns
        offset: "4rem", // gutter width - 40px
        mobileFirst: true,
        mixinNames: {
            container: "container"
        },
        container: {
            fields: "2rem" // side fields - 20px
        },
        breakPoints: {
            xs: {
                width: "20rem" // 320px
            },
            sm: {
                width: "36rem" // 576px
            },
            md: {
                width: "48rem" // 768px
            },
            lg: {
                width: "62rem" // 992px
            }
        }
    });
    cb();
});
