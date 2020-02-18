----
HOW TO USE FOR TESTING
----

1. Unzip THIS release zipfile (e2erunner-1.3.2-20200219)
2. [ONLY FIRST TIME] install protractor globally (`npm install -g protractor`)
3. [ONLY FIRST TIME] update (`webdriver-manager update`) - Ensure latest Chrome browser
4. `webdriver-manager start`
5. Modify protractor.conf.js to point params.xlsx to your test file
6. See the sample-tests.xlsx to create your own test file.
7. run `protractor` in the folder.

----
RELEASE NOTES
----

2020-02-19
1.3.2 (CURRENT)

release ready with readme. no npm install.

.

2020-02-19
1.3.1

unified js with ncc.

.

2020-02-18
1.3 

CSS and XPath works. 100 sec timeout removed.

.

Nov 13, 2018, 2:41 PM

While downloading the link I get the warning: " This file is not commonly downloaded and may be dangerous.  ". Please ignore and click 'keep'. 

.

Nov 13, 2018, 2:30 PM

e2erunner 1.2
https://drive.google.com/file/d/1gLyoTv18OsKB57CY7flIMqBO-WQuYVsf/view?usp=sharing

Changes: 
1. Errors will not stop execution. Will put it in the console and keep going. Sample output.txt inside the zip.

Any other stoppers? 

.

Nov 8, 2018, 12:30 PM

Just copy pasting (over writing) all files in the zip should work (to save the npm install of node_modules again), else do from start as in 1.0.

.

Nov 8, 2018, 12:06 PM

e2erunner 1.1
https://drive.google.com/file/d/1YXTXeLgpqhPocRnw8AGeZ0j7rM9mjMz6/view?usp=sharing

Changes:
1, New action: sleep with milliseconds. Please see the sample xlsx inside (row 49) for the working test. 
2. Unknown text in action will be treated as an comment and a warning (see output.txt, for the sample at row 43).

Known issue:
1. For some reason, row 43 assert is not working for me. Maybe an issue with DnD? (no error thrown though)

So, now you can sleep (within 100 seconds for now) when you have to wait.

.

Nov 2, 2018, 12:20 PM

As a batch command, the following works
"start protractor protractor1.conf.js & start protractor protractor2.conf.js" (it will open two terminal, which is good)
https://stackoverflow.com/questions/33018086/how-to-run-multiple-commands-parallel-in-windows-cmd-prompt
(/B is in the same console, but confusing for us).

So, for many files or sheets, we have a working solution. Of course, with feedback, we can improve.

.

Attachments
Nov 2, 2018, 12:11 PM

Ok, multiple protractor works. 

So, for running multiple sheets or files parallelly, you can just create two conf files pointing to two different xlsx files or sheets, and call the protractor with the conf file in command line. Like so: "protractor protractor1.conf.js". 

.

Oct 29, 2018, 7:51 PM

BTW, Locator (3rd column in the xlsx), that I have used are just css selectors (use id wherever possible).

.

Mon, Oct 29, 2018, 7:45 PM

https://drive.google.com/open?id=1c5QHk-El_D31Hs3b6yU8VxHYBTw6QOLT

How to run:

1. download above zip file and extract as a folder.
2. This is a node.js project written in typescript. Install node 8.
3. Go to the folder, open terminal in that folder and do "npm install" (installs node dependencies)
5. Setup protractor. (basically do npm install globally, update and start webdriver-manager)
6. Once done, run just "protractor". You should get the output as in output.txt in the zip.
7. This is a test run on selenium demo site seleniumeasy. The tests are almost in the same form inside sample-tests.xlsx attached. 
8. You can add a similar new xlsx file or a sheet, and configure (change params.xlsx and params.sheet) inside protractor.conf.js file attached. (For now only one sheet will run not the whole xlsx)

See if this works. I should be there by noon tomorrow. Will discuss.

.
