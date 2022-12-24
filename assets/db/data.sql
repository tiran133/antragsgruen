SET @OLD_UNIQUE_CHECKS = @@UNIQUE_CHECKS, UNIQUE_CHECKS = 0;
SET @OLD_FOREIGN_KEY_CHECKS = @@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS = 0;
SET @OLD_SQL_MODE = @@SQL_MODE, SQL_MODE = 'TRADITIONAL,ALLOW_INVALID_DATES';

INSERT INTO `texTemplate` (`id`, `siteId`, `title`, `texLayout`, `texContent`) VALUES
  (1, NULL, 'Standard (Grünes CI)',
   '\\documentclass[paper=a4, 11pt, pagesize, parskip=half, DIV=calc]{scrartcl}\r\n\\usepackage[T1]{fontenc}\r\n\\usepackage{lmodern}\r\n\\usepackage[%LANGUAGE%]{babel}\r\n\\usepackage{fixltx2e}\r\n\\usepackage{lineno}\r\n\\usepackage{tabularx}\r\n\\usepackage{scrlayer-scrpage}\r\n\\usepackage[normalem]{ulem}\r\n\\usepackage[right]{eurosym}\r\n\\usepackage{fontspec}\r\n\\usepackage{geometry}\r\n\\usepackage{color}\r\n\\usepackage{lastpage}\r\n\\usepackage[normalem]{ulem}\r\n\\usepackage{hyperref}\r\n\\usepackage{wrapfig}\r\n\\usepackage{enumitem}\r\n\\usepackage{graphicx}\r\n\\usepackage{pdfpages}\r\n\\usepackage[export]{adjustbox}\r\n\r\n\\newfontfamily\\ArvoGruen[\r\n  Path=%ASSETROOT%Arvo/\r\n]{Arvo_Gruen_1004.otf}\r\n\\newfontfamily\\ArvoRegular[\r\n  Path=%ASSETROOT%Arvo/\r\n]{Arvo-Regular_v104.ttf}\r\n\\newfontfamily\\AntragsgruenSection[\r\n  Path=%ASSETROOT%Arvo/\r\n]{Arvo-Regular_v104.ttf}\r\n\\setmainfont[\r\n  Path=%ASSETROOT%PT-Sans/,\r\n  BoldFont=PTS75F.ttf,\r\n  ItalicFont=PTS56F.ttf,\r\n  BoldItalicFont=PTS76F.ttf\r\n]{PTS55F.ttf}\r\n\r\n\\definecolor{Insert}{rgb}{0,0.6,0}\r\n\\definecolor{Delete}{rgb}{1,0,0}\r\n\r\n\\hypersetup{\r\n    colorlinks=true,\r\n    linkcolor=blue,\r\n    filecolor=blue,      \r\n    urlcolor=blue,\r\n} \r\n\\urlstyle{same}\r\n\r\n\\title{%TITLE%}\r\n\\author{%AUTHOR%}\r\n\\geometry{a4paper, portrait, top=10mm, left=20mm, right=15mm, bottom=25mm, includehead=true}\r\n\r\n\\pagestyle{scrheadings}\r\n\\clearscrheadfoot\r\n\\renewcommand\\sectionmark[1]{\\markright{\\MakeMarkcase {\\hskip .5em\\relax#1}}}\r\n\\setcounter{secnumdepth}{0}\r\n\r\n\\newcommand\\invisiblesection[1]{%\r\n  \\refstepcounter{section}%\r\n  \\addcontentsline{toc}{section}{\\protect\\numberline{\\thesection}#1}%\r\n  \\sectionmark{#1}\r\n}\r\n\r\n\\ohead{\\ArvoRegular \\footnotesize \\rightmark}\r\n\\ofoot{\\ArvoRegular \\footnotesize Seite \\thepage\\\r\n% / \\pageref{LastPage}\r\n}\r\n\\setheadsepline{0.4pt}\r\n\\setfootsepline{0.4pt}\r\n\r\n\\begin{document}\r\n\r\n\\shorthandoff{"}\r\n\\sloppy\r\n\\hyphenpenalty=10000\r\n\\hbadness=10000\r\n\r\n%CONTENT%\r\n\r\n\\end{document}',
   '\\setcounter{page}{1}\r\n\\thispagestyle{empty}\r\n\r\n\\vspace*{-25mm}\r\n\\begin{flushright}\r\n \\ArvoRegular\r\n \\small\r\n \\textbf{\\normalsize %INTRODUCTION_BIG%}\\\\\r\n %INTRODUCTION_SMALL%\r\n\\end{flushright}\r\n\r\n\\begin{tabularx}{\\textwidth}{|lX|}\r\n    \\cline{1-2}\r\n    \\ArvoGruen\r\n&                               \\\\\r\n    \\multicolumn{2}{|l|}{\r\n    \\parbox{17cm}{\\raggedright\\textbf{\\LARGE %TITLEPREFIX%} %TITLE%      }} \\\\\r\n                                                            &                               \\\\\r\n    %MOTION_DATA_TABLE%\r\n                                                            &                               \\\\\r\n    \\cline{1-2}\r\n\\end{tabularx}\r\n\\vspace{4mm}\r\n\r\n\\invisiblesection{\\ArvoRegular %TITLE_LONG%}\r\n\r\n%TEXT%\r\n'),
  (2, NULL, 'Ohne Zeilennummern',
   '\\documentclass[paper=a4, 11pt, pagesize, parskip=half, DIV=calc]{scrartcl}\r\n\\usepackage[T1]{fontenc}\r\n\\usepackage{lmodern}\r\n\\usepackage[%LANGUAGE%]{babel}\r\n\\usepackage{fixltx2e}\r\n\\usepackage{lineno}\r\n\\usepackage{tabularx}\r\n\\usepackage{scrlayer-scrpage}\r\n\\usepackage[normalem]{ulem}\r\n\\usepackage[right]{eurosym}\r\n\\usepackage{fontspec}\r\n\\usepackage{geometry}\r\n\\usepackage{color}\r\n\\usepackage{lastpage}\r\n\\usepackage[normalem]{ulem}\r\n\\usepackage{hyperref}\r\n\\usepackage{wrapfig}\r\n\\usepackage{enumitem}\r\n\\usepackage{graphicx}\r\n\\usepackage{pdfpages}\r\n\\usepackage[export]{adjustbox}\r\n\r\n\\newfontfamily\\ArvoGruen[\r\n  Path=%ASSETROOT%Arvo/\r\n]{Arvo_Gruen_1004.otf}\r\n\\newfontfamily\\ArvoRegular[\r\n  Path=%ASSETROOT%Arvo/\r\n]{Arvo-Regular_v104.ttf}\r\n\\newfontfamily\\AntragsgruenSection[\r\n  Path=%ASSETROOT%Arvo/\r\n]{Arvo-Regular_v104.ttf}\r\n\\setmainfont[\r\n  Path=%ASSETROOT%PT-Sans/,\r\n  BoldFont=PTS75F.ttf,\r\n  ItalicFont=PTS56F.ttf,\r\n  BoldItalicFont=PTS76F.ttf\r\n]{PTS55F.ttf}\r\n\r\n\\definecolor{Insert}{rgb}{0,0.6,0}\r\n\\definecolor{Delete}{rgb}{1,0,0}\r\n\r\n\\hypersetup{\r\n    colorlinks=true,\r\n    linkcolor=blue,\r\n    filecolor=blue,      \r\n    urlcolor=blue,\r\n} \r\n\\urlstyle{same}\r\n\r\n\\title{%TITLE%}\r\n\\author{%AUTHOR%}\r\n\\geometry{a4paper, portrait, top=10mm, left=20mm, right=15mm, bottom=25mm, includehead=true}\r\n\r\n\\pagestyle{scrheadings}\r\n\\clearscrheadfoot\r\n\\renewcommand\\sectionmark[1]{\\markright{\\MakeMarkcase {\\hskip .5em\\relax#1}}}\r\n\\setcounter{secnumdepth}{0}\r\n\r\n\\newcommand\\invisiblesection[1]{%\r\n  \\refstepcounter{section}%\r\n  \\addcontentsline{toc}{section}{\\protect\\numberline{\\thesection}#1}%\r\n  \\sectionmark{#1}\r\n}\r\n\r\n\\ohead{\\ArvoRegular \\footnotesize \\rightmark}\r\n\\setheadsepline{0.4pt}\r\n\\setfootsepline{0.4pt}\r\n\r\n\\begin{document}\r\n\r\n\\shorthandoff{"}\r\n\\sloppy\r\n\\hyphenpenalty=10000\r\n\\hbadness=10000\r\n\r\n%CONTENT%\r\n\r\n\\end{document}',
   '\\setcounter{page}{1}\r\n\\thispagestyle{empty}\r\n\r\n\\vspace*{-25mm}\r\n\\begin{flushright}\r\n \\ArvoRegular\r\n \\small\r\n \\textbf{\\normalsize %INTRODUCTION_BIG%}\\\\\r\n %INTRODUCTION_SMALL%\r\n\\end{flushright}\r\n\r\n\\begin{tabularx}{\\textwidth}{|lX|}\r\n    \\cline{1-2}\r\n    \\ArvoGruen\r\n&                               \\\\\r\n    \\multicolumn{2}{|l|}{\r\n    \\parbox{17cm}{\\raggedright\\textbf{\\LARGE %TITLEPREFIX%} %TITLE%      }} \\\\\r\n                                                            &                               \\\\\r\n    %MOTION_DATA_TABLE%\r\n                                                            &                               \\\\\r\n    \\cline{1-2}\r\n\\end{tabularx}\r\n\\vspace{4mm}\r\n\r\n\\invisiblesection{\\ArvoRegular %TITLE_LONG%}\r\n\r\n%TEXT%\r\n'),
  (3, NULL, 'Bewerbungen',
   '\\documentclass[paper=a4, 11pt, pagesize, parskip=half, DIV=calc]{scrartcl}\r\n\\usepackage[T1]{fontenc}\r\n\\usepackage{lmodern}\r\n\\usepackage[%LANGUAGE%]{babel}\r\n\\usepackage{fixltx2e}\r\n\\usepackage{ragged2e}\r\n\\usepackage{lineno}\r\n\\usepackage{tabularx}\r\n\\usepackage{scrlayer-scrpage}\r\n\\usepackage[normalem]{ulem}\r\n\\usepackage[right]{eurosym}\r\n\\usepackage{fontspec}\r\n\\usepackage{geometry}\r\n\\usepackage{color}\r\n\\usepackage{lastpage}\r\n\\usepackage[normalem]{ulem}\r\n\\usepackage{hyperref}\r\n\\usepackage{wrapfig}\r\n\\usepackage{enumitem}\r\n\\usepackage{graphicx}\r\n\\usepackage[export]{adjustbox}\r\n\\usepackage{pdfpages}\r\n\r\n\\newfontfamily\\ArvoGruen[\r\n  Path=%ASSETROOT%Arvo/\r\n]{Arvo_Gruen_1004.otf}\r\n\\newfontfamily\\ArvoRegular[\r\n  Path=%ASSETROOT%Arvo/\r\n]{Arvo-Regular_v104.ttf}\r\n\\newfontfamily\\AntragsgruenSection[\r\n  Path=%ASSETROOT%Arvo/\r\n]{Arvo-Regular_v104.ttf}\r\n\\setmainfont[\r\n  Path=%ASSETROOT%PT-Sans/,\r\n  BoldFont=PTS75F.ttf,\r\n  ItalicFont=PTS56F.ttf,\r\n  BoldItalicFont=PTS76F.ttf\r\n]{PTS55F.ttf}\r\n\r\n\\definecolor{Insert}{rgb}{0,0.6,0}\r\n\\definecolor{Delete}{rgb}{1,0,0}\r\n\r\n\\hypersetup{\r\n    colorlinks=true,\r\n    linkcolor=blue,\r\n    filecolor=blue,      \r\n    urlcolor=blue,\r\n} \r\n\\urlstyle{same}\r\n\r\n\\title{%TITLE%}\r\n\\author{%AUTHOR%}\r\n\\geometry{a4paper, portrait, top=10mm, left=20mm, right=15mm, bottom=25mm, includehead=true}\r\n\r\n\\pagestyle{scrheadings}\r\n\\clearscrheadfoot\r\n\\renewcommand\\sectionmark[1]{\\markright{\\MakeMarkcase {\\hskip .5em\\relax#1}}}\r\n\\setcounter{secnumdepth}{0}\r\n\r\n\\newcommand\\invisiblesection[1]{%\r\n  \\refstepcounter{section}%\r\n  \\addcontentsline{toc}{section}{\\protect\\numberline{\\thesection}#1}%\r\n  \\sectionmark{#1}\r\n}\r\n\r\n\\ohead{\\ArvoRegular \\footnotesize \\rightmark}\r\n\\ofoot{\\ArvoRegular \\footnotesize Seite \\thepage\\\r\n% / \\pageref{LastPage}\r\n}\r\n\\setheadsepline{0.4pt}\r\n\\setfootsepline{0.4pt}\r\n\r\n\\begin{document}\r\n\r\n\\shorthandoff{\"}\r\n\\sloppy\r\n\\hyphenpenalty=10000\r\n\\hbadness=10000\r\n\r\n%CONTENT%\r\n\r\n\\end{document}',
   '\\setcounter{page}{1}\r\n\\thispagestyle{empty}\r\n\r\n\\vspace*{-25mm}\r\n\\begin{flushright}\r\n \\ArvoRegular\r\n \\small\r\n \\textbf{\\normalsize %INTRODUCTION_BIG%}\\\\\r\n %INTRODUCTION_SMALL%\r\n\\end{flushright}\r\n\r\n\\setlength{\\fboxrule}{0.01em}\r\n\\setlength{\\fboxsep}{0.5em}\r\n\\fbox{\\begin{minipage}{\\dimexpr\\textwidth-2\\fboxsep-2\\fboxrule\\relax}\r\n\\vspace{0.2cm}\r\n\r\n\\begin{tabular}{p{4cm}>{\\RaggedLeft\\arraybackslash}p{12.2cm}}\r\n\\textbf{\\LARGE %TITLEPREFIX%} & \\textbf{\\LARGE %TITLE_RAW%}\r\n\\end{tabular}\r\n\r\n\\vspace{0.4cm}\r\n\r\n\\begin{tabular}{p{4cm}>{\\RaggedRight\\arraybackslash}p{12.2cm}}\r\n\\textbf{%APP_TITLE%} \\\\\r\n%APP_TOP_LABEL% & %APP_TOP%\r\n\\end{tabular}\r\n\r\n\\vspace{0.2cm}\r\n\\end{minipage}}\r\n\\vspace{4mm}\r\n\r\n\\invisiblesection{\\ArvoRegular %TITLE_LONG%}\r\n\r\n%TEXT%\r\n'),
  (4, NULL, 'NEOS',
   '\\documentclass[paper=a4, 12pt, pagesize, parskip=half, DIV=calc]{scrartcl}\r\n\\usepackage[T1]{fontenc}\r\n\\usepackage{lmodern}\r\n\\usepackage[%LANGUAGE%]{babel}\r\n\\usepackage{fixltx2e}\r\n\\usepackage{lineno}\r\n\\usepackage{tabularx}\r\n\\usepackage{scrlayer-scrpage}\r\n\\usepackage[normalem]{ulem}\r\n\\usepackage[right]{eurosym}\r\n\\usepackage{fontspec}\r\n\\usepackage{geometry}\r\n\\usepackage{color}\r\n\\usepackage{lastpage}\r\n\\usepackage[normalem]{ulem}\r\n\\usepackage{hyperref}\r\n\\usepackage{wrapfig}\r\n\\usepackage{enumitem}\r\n\\usepackage{graphicx}\r\n\\usepackage{pdfpages}\r\n\\usepackage[export]{adjustbox}\r\n\r\n\\newfontfamily\\ArvoGruen[\r\n  Path=%PLUGINROOT%neos/assets/montserrat/\r\n]{Montserrat-Black.ttf}\r\n\\newfontfamily\\ArvoRegular[\r\n  Path=%PLUGINROOT%neos/assets/montserrat/\r\n]{Montserrat-Regular.ttf}\r\n\\newfontfamily\\AntragsgruenSection[\r\n  Path=%PLUGINROOT%neos/assets/montserrat/\r\n]{Montserrat-Bold.ttf}\r\n\\setmainfont[\r\n  Path=%PLUGINROOT%neos/assets/source-sans-pro/,\r\n  BoldFont=SourceSerifPro-Bold.ttf,\r\n  ItalicFont=SourceSerifPro-It.ttf,\r\n  BoldItalicFont=SourceSerifPro-BoldIt.ttf\r\n]{SourceSerifPro-Regular.ttf}\r\n\r\n\\definecolor{Insert}{rgb}{0,0.6,0}\r\n\\definecolor{Delete}{rgb}{1,0,0}\r\n\r\n\\hypersetup{\r\n    colorlinks=true,\r\n    linkcolor=blue,\r\n    filecolor=blue,\r\n    urlcolor=blue,\r\n}\r\n\\urlstyle{same}\r\n\r\n\\title{%TITLE%}\r\n\\author{%AUTHOR%}\r\n\\geometry{a4paper, portrait, top=20mm, left=20mm, right=20mm, bottom=25mm, includehead=true}\r\n\r\n\\pagestyle{scrheadings}\r\n\\clearscrheadfoot\r\n\\renewcommand\\sectionmark[1]{\\markright{\\MakeMarkcase {\\hskip .5em\\relax#1}}}\r\n\\setcounter{secnumdepth}{0}\r\n\r\n\\newcommand\\invisiblesection[1]{%\r\n  \\refstepcounter{section}%\r\n  \\addcontentsline{toc}{section}{\\protect\\numberline{\\thesection}#1}%\r\n  \\sectionmark{#1}\r\n}\r\n\r\n\\begin{document}\r\n\r\n\\shorthandoff{\"}\r\n\\sloppy\r\n\\hyphenpenalty=10000\r\n\\hbadness=10000\r\n\r\n%CONTENT%\r\n\r\n\\end{document}',
   '\\setcounter{page}{1}\r\n\\thispagestyle{scrheadings}\r\n\\clearscrheadfoot\r\n\\setheadsepline{0pt}\r\n\\setfootsepline{0.4pt}\r\n\\ohead{}\r\n\\ofoot{\\ArvoRegular \\footnotesize %PUBLICATION_DATE%}\r\n\\cfoot{\\ArvoRegular \\footnotesize %PAGE_LABEL% \\thepage \\\r\n/ {\\hypersetup{linkcolor=black}\\pageref{LastPage}}}\r\n\\ifoot{\\ArvoRegular \\footnotesize A1}\r\n\r\n\r\n\\vspace*{-25mm}\r\n\\begin{flushright}\r\n %LOGO%\r\n\\end{flushright}\r\n\r\n\\vspace*{-2mm}\r\n\\hrulefill\r\n\\vspace*{2mm}\r\n\r\n\\invisiblesection{\\ArvoRegular %TITLE_LONG%}\r\n\\begin{center}\\AntragsgruenSection %MOTION_TYPE%\\end{center}\r\n\r\n\\raggedright\r\n%INITIATOR_LABEL%: \\textbf{%AUTHOR%} \\linebreak\r\n\\linebreak\r\n%TITLE_LABEL%: \\textbf{%TITLE%} \\linebreak\r\n\r\n%TEXT%\r\n');

INSERT INTO `migration` (`version`, `apply_time`) VALUES
  ('m000000_000000_base', '1443797618'),
  ('m150930_094343_amendment_multiple_paragraphs', '1443797661'),
  ('m151021_084634_supporter_organization_contact_person', '1445519132'),
  ('m151025_123256_user_email_change', '1445802530'),
  ('m151104_092212_motion_type_deletable', '1445802530'),
  ('m151104_132242_site_consultation_date_creation', '1445802530'),
  ('m151106_083636_site_properties', '1446801672'),
  ('m151106_183055_motion_type_two_cols', '1446834722'),
  ('m160114_200337_motion_section_is_right', '1452801905'),
  ('m160228_152511_motion_type_rename_initiator_form', '1457086233'),
  ('m160304_095858_motion_slug', '1457086236'),
  ('m160305_201135_support_separate_to_motions_and_amendments', '1457209261'),
  ('m160305_214526_support_likes_dislikes', '1457209261'),
  ('m160605_104819_remove_consultation_type', '1457209261'),
  ('m161112_161536_add_date_delete', '1457209261'),
  ('m170111_182139_motions_non_amendable', '1457209261'),
  ('m170129_173812_typo_maintenance', '1485711868'),
  ('m170204_191243_additional_user_fields', '1486235651'),
  ('m170206_185458_supporter_contact_name', '1486410534'),
  ('m170226_134156_motionInitiatorsAmendmentMerging', '1489921851'),
  ('m170419_182728_delete_consultation_admin', '1492626507'),
  ('m170611_195343_global_alternatives', '1497211108'),
  ('m170730_094020_amendment_proposed_changes', '1501417715'),
  ('m170807_193931_voting_status', '1502136950'),
  ('m170826_180536_proposal_notifications', '1503771800'),
  ('m170923_151852_proposal_explanation', '1506180317'),
  ('m171219_173517_motion_proposed_changes', '1513705579'),
  ('m171231_093702_user_organization_ids', '1514713083'),
  ('m180519_180908_siteTexts', '1526808262'),
  ('m180524_153540_motionTypeDeadlines', '1527269132'),
  ('m180531_062049_parent_motion_ids', '1527748415'),
  ('m180602_121824_motion_create_buttons', '1527942369'),
  ('m180604_080335_notification_settings', '1528099492'),
  ('m180605_125835_consultation_files', '1528299492'),
  ('m180609_095225_consultation_text_in_menu', '1528538064'),
  ('m180619_080947_email_settings_to_consultations', '1529396014'),
  ('m180621_113721_login_settings_to_consultation', '1529581178'),
  ('m180623_113955_motionTypeSettings', '1529754995'),
  ('m180901_131243_sectionPrintTitle', '1535807788'),
  ('m180902_182805_initiatorSettings', '1536090959'),
  ('m180906_171118_supporterExtraData', '1536090959'),
  ('m181027_094836_fix_amendment_comment_relation', '1541091342'),
  ('m181101_161124_proposed_procedure_active', '1541091342'),
  ('m181027_174827_consultationFilesSite', '1544887273'),
  ('m190816_074556_votingData', '1565941741'),
  ('m190901_065243_deleteOldMergingDrafts', '1565941741'),
  ('m191101_162351_motion_responsibility', '1572625790'),
  ('m191201_080255_motion_support_types', '1575188572'),
  ('m191208_065712_file_downloads', '1575791718'),
  ('m191222_135810_lualatex', '1577023546'),
  ('m200107_113326_motionSectionSettings', '1578396899'),
  ('m200125_124424_minimalistic_ui', '1580379395'),
  ('m200130_100306_agenda_extension', '1580379395'),
  ('m200223_161553_agenda_obsoletion', '1582474676'),
  ('m200301_110040_user_settings', '1583060479'),
  ('m200621_063838_amendmentMotionExtraData', '1592721950'),
  ('m201111_193448_consultation_text_per_motion_type', '1605123408'),
  ('m200329_135701_speech_list', '1585492187'),
  ('m210116_080438_rename_email_blocklist', '1610784771'),
  ('m210207_145533_remove_obsolete_fields', '1615109742'),
  ('m210307_092657_enhance_consultation_log', '1615109833'),
  ('m210425_100105_tag_types_amendment_tags', '1619345550'),
  ('m210509_173210_statute_amendments', '1620567930'),
  ('m210724_134121_votings', '1627138465'),
  ('m211031_004346_failed_login_attempts', '1635642021'),
  ('m211108_192545_non_public_motion_sections', '1636399772'),
  ('m211218_190505_voting_block_answers_permissions', '1639855318'),
  ('m220102_130212_user_groups', '1641129559'),
  ('m220116_154835_policy_data', '1642348557'),
  ('m220305_160942_voting_quorum', '1646497937'),
  ('m220512_074519_voting_position', '1652344229'),
  ('m220528_175811_remove_user_privilege_tables', '1653760931'),
  ('m220710_080845_remove_odt_templates', '1657440574'),
  ('m220710_114056_document_file_groups', '1657453642'),
  ('m220730_144556_voting_block_settings_usergroup_order', '1659192616'),
  ('m220806_131705_motion_modification_date', '1659792341'),
  ('m220902_181010_motion_not_commentable', '1662143333'),
  ('m220904_083241_amendment_to_other_amendments', '1662280591'),
  ('m221224_151157_remove_site_admins', '1671894884')
;

SET SQL_MODE = @OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS = @OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS = @OLD_UNIQUE_CHECKS;
