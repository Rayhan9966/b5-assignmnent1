
    function formatString(s: string, toUpper: boolean = true): string {
        //  i  can use this also   return toUpper ? s.toUpperCase() : s.toLowerCase();
        if (toUpper) {
            return s.toUpperCase();
        } else {
            return s.toLowerCase();
        }

    }

    console.log(formatString("Hello World", false
    ));

