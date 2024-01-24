            function topSecret(str) {
                //coding here...
                var chars = str.split("");
                for (var i = 0; i < chars.length; i++) {
                    if (/[a-zA-Z]/.test(chars[i])) {
                        var charCode = chars[i].charCodeAt();
                        charCode = charCode >= 97 ? ((charCode - 97 - 3 + 26) % 26) + 97 : ((charCode - 65 - 3 + 26) % 26) + 65;
                        chars[i] = String.fromCharCode(charCode);
                    }
                }
                return chars.join("");
            }