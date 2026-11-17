const projects = {
    'analisis-pizza': {
        title: 'Pizza Sales Performance & Transactional Data Analysis',
        category: 'EXCEL',
        technologies: 'Microsoft Excel · Data Cleaning · Pivot Tables · Sales Analysis · KPI Analysis · Dashboard Visualization',
        image: 'images/Pizza.png',
        imageAlt: 'Pizza sales analysis dashboard in Microsoft Excel',
        previewTitle: 'Pizza sales dashboard preview',
        previewCaption: 'An Excel dashboard summarizing KPIs, best-selling pizzas, monthly revenue trends, and sales by category and size.',
        highlights: [
            {
                title: 'Project Overview',
                description: 'Microsoft Excel (Pivot Table, Charts, Formulas)'
            },
            {
                title: 'Problem',
                description: [
                    'The retail operational management team needed better visibility into peak hours and months, the most efficient pizza sizes, and raw material planning due to fragmented transaction data.'
                ]
            },
            {
                title: 'Action',
                description: [
                    'Cleaned the sales data and grouped transactions using Pivot Tables to map key operational metrics such as Total Revenue, Total Orders, and Average Order Value (AOV).',
                    'Analyzed demand patterns based on monthly time trends and the distribution of product categories and sizes.',
                    'Designed an interactive visual dashboard using line charts, bar charts, and slicers as a monitoring tool to support faster operational decisions.'
                ]
            },
            {
                title: 'Result',
                description: [
                    'Successfully calculated total revenue of $817,860.05, total orders of 21,350, and an average order value of $38.31.',
                    'Mapped the top 10 best-selling pizzas, including The Barbecue Chicken Pizza, and distributed sales contributions by product category and size.',
                    'Identified monthly revenue fluctuations to determine the peak and lowest sales periods.'
                ]
            }
        ]
    },

    'retail-analysis': {
        title: 'Retail Operational Performance & Profitability Optimization Dashboard',
        category: 'POWER BI',
        technologies: 'Power BI · Power Query · DAX · Microsoft Excel · Data Cleaning · Data Transformation · Data Visualization · KPI Development · Dashboard Development',
        description: 'Analyzing retail operational performance and profitability based on sales, profit, products, customers, regions, and time periods.',
        image: 'images/retail.png',
        imageAlt: 'Retail business performance dashboard with sales and profit graphs',
        previewTitle: 'Dashboard preview image',
        previewCaption: 'Visual preview of the retail performance dashboard.',
        highlights: [
            {
                title: 'Project Overview',
                description: 'Retail operational performance dashboard to review sales, profit, products, customers, regions, and time periods.'
            },
            {
                title: 'Problem',
                description: 'Retail operational performance evaluation often gets stuck on high gross sales figures without examining profit margins and product line efficiency in depth. Inconsistent discount strategies and variations across regions can reduce profitability and create operational inefficiency. Management needs a structured monitoring system to identify loss-making areas and prioritize business process improvements.'
            },
            {
                title: 'Action',
                description: [
                    'Validated, cleaned, and transformed a large transaction dataset (9,994 rows) using Power Query to ensure operational data integrity.',
                    'Built key performance indicators (KPI Development) using DAX to measure core metrics precisely: total sales, net profit, order count, and profit margin.',
                    'Executed comparative analysis of product performance, customer contribution, and regional operational efficiency to map deviations and low-performing areas.',
                    'Analyzed the operational correlation between discount rate and profit margin to detect potential profitability erosion risks.',
                    'Designed and deployed an interactive dashboard in Power BI as a management control tool to monitor performance trends.'
                ]
            },
            {
                title: 'Result',
                description: [
                    'Provided a centralized operational monitoring instrument that mapped leading product categories (for example: Technology as the highest profit contributor versus Furniture with high volume but tight margins) and the strongest operating region (West Region).',
                    'Quantitatively identified that higher discount levels directly correlated with declining profitability, giving management a basis for revising discount policy SOPs.',
                    'Generated data-driven recommendations to optimize product portfolio efficiency, reduce loss-making products, and tighten regional performance evaluation controls.'
                ]
            }
        ]
    },

    'imdb-data-cleaning': {
        title: 'Data Quality Control & Standardization Framework (IMDb Dataset)',
        category: 'Google Spreadsheet',
        technologies: 'Data Cleaning',
        image: 'images/IMDB.png',
        imageAlt: 'Dataset after the data cleaning process',
        previewTitle: 'Table data preview',
        previewCaption: 'Preview of the cleaned dataset.',
        highlights: [
            {
                title: 'Project Overview',
                description: 'IMDb dataset in 2019'
            },
            {
                title: 'Problem',
                description: 'The raw dataset experienced a drop in quality due to duplicate records, missing values, and inconsistent writing formats. In operational management, unstructured and anomalous data create a risk of incorrect decisions (Garbage In, Garbage Out) and slow down the analysis workflow.'
            },
            {
                title: 'Action',
                description: [
                    'Executed a structured data cleaning and standardization process using a combination of functions and formulas in Google Sheets.',
                    'Performed duplicate verification and removal, handled missing values, and corrected inconsistent text structures and date formats.',
                    'Applied data validation rules to ensure all columns follow a consistent format and are free from input errors.'
                ]
            },
            {
                title: 'Result',
                description: [
                    'Successfully transformed anomalous raw data into a fully standardized, consistent, and duplicate-free database.',
                    'Reduced data preparation time and created a high-integrity dataset foundation to accelerate and improve operational analysis at a more advanced level.'
                ]
            }
        ]
    },

    'e-commerce-sales-analysis': {
        title: 'E-Commerce Operational & Transactional Performance Analysis',
        category: 'EXCEL & SQL',
        technologies: 'Data Cleaning · Data Preparation · Database Preparation · Exploratory Data Analysis · SQL Analysis · Data Visualization · Reporting',
        image: 'images/report 2.png',
        imageAlt: 'Overview of the e-commerce sales analysis project',
        previewTitle: 'Dashboard preview image',
        previewCaption: 'Visual preview of the overview for the e-commerce sales analysis project.',
        highlights: [
            {
                title: 'Project Overview',
                description: 'This project focuses on e-commerce transaction data analysis using PostgreSQL and SQL to understand sales performance, product and category contributions, customer spending behavior, regional performance, payment methods, and profitability.'
            },
            {
                title: 'Problem',
                description: 'E-commerce transaction data covering thousands of sales records, customers, regions, and payment methods requires structured database governance. Without reliable database processing, operational management would struggle to evaluate sales efficiency, detect profit contributions per product line, and map regional performance accurately.'
            },
            {
                title: 'Action',
                description: [
                    'Imported, structured, and managed the database for 5,000 transaction records using PostgreSQL.',
                    'Executed SQL queries to perform exploratory data analysis (EDA) and calculate key operational metrics such as total sales volume, number of transactions, and average transaction value.',
                    'Analyzed comparative operational parameters including product categories, regional efficiency, payment method preferences, and profit margins.',
                    'Prepared analytical findings into a structured report using Microsoft PowerPoint to support management evaluation.'
                ]
            },
            {
                title: 'Result',
                description: [
                    'Mapped sales performance precisely with total sales of IDR 533.67 million from 5,000 transactions and an average transaction value of IDR 106,733.20.',
                    'Identified top-performing categories, including Home Decor as the highest sales contributor at IDR 57.23 million and Furniture as the highest profit contributor at IDR 8.69 million, and mapped the strongest operating region (North Region).',
                    'Produced a comprehensive analytical report that provides a data foundation for management to evaluate sales strategies and optimize product portfolio decisions moving forward.'
                ]
            }
        ]
    },

    'kost-rental-data-analysis': {
        title: 'Property Rental Market Data Standardization & Regional Cost Benchmarking',
        category: 'EXCEL',
        technologies: 'Microsoft Excel · Data Cleaning · Data Preprocessing · Data Validation · Exploratory Data Analysis (EDA) · Descriptive Statistics · Pivot Table · Excel Formulas · Data Visualization · Data Analysis & Interpretation · Data Reporting',
        image: 'images/report1.png',
        imageAlt: 'Room rental data analysis preview',
        previewTitle: 'Rental analysis preview',
        previewCaption: 'Visual preview of the room rental data analysis.',
        highlights: [
            {
                title: 'Project Overview',
                description: 'Analysis of boarding house listing data in Jabodetabek using Microsoft Excel to review distribution, rental prices, and variations by region and type.'
            },
            {
                title: 'Problem',
                description: 'The rental listing database had a high level of inconsistency, characterized by irregular price formats, missing values, and unstandardized location structures. This inconsistency hindered accurate price benchmarking and complicated the evaluation of cost variations across regions.'
            },
            {
                title: 'Action',
                description: [
                    'Validated, cleaned, and standardized data formats for 2,486 listing records using Microsoft Excel, including duplicate removal and conversion of price text to numeric values.',
                    'Applied Pivot Table functions and custom Excel formulas to aggregate listing distribution, map average rent values, and group property variations by region and category.',
                    'Executed descriptive statistical analysis to identify price dispersion and detect data outliers to ensure the integrity of the analysis results.',
                    'Prepared data visualizations and comprehensive analytical reports to present cost comparisons and regional distribution.'
                ]
            },
            {
                title: 'Result',
                description: [
                    'Produced a 2,486-listing database that was 100% structured, consistent, and ready for data-driven decision-making.',
                    'Mapped the concentration of listings across regions (Bekasi had the highest number of listings, while East Jakarta had the lowest).',
                    'Identified rental cost benchmarks (South Jakarta had the highest average rent, while Bogor had the lowest).',
                    'Mapped property type variations where the Mixed Boarding category dominated market share and had the highest average rental value.'
                ]
            }
        ]
    },

    'yolov8-rock-detection': {
        title: 'Experimental Performance Analysis of the Rock Detection Model (YOLOv8)',
        category: 'Process Evaluation & Performance Analysis',
        technologies: 'Python · Computer Vision · Model Performance Evaluation · Data Optimization · Performance Benchmarking · Process Analysis',
        image: 'images/projek1.jpg',
        imageAlt: 'Preview of the experimental performance analysis project for the rock detection model (YOLOv8)',
        previewTitle: 'Project preview',
        previewCaption: 'Visual preview of the rock detection project.',
        gallery: [
            {
                image: 'images/yolov8-training-flowchart.png',
                alt: 'Flowchart of the data collection and processing, training, testing, and evaluation process for the YOLOv8 model',
                caption: 'Workflow for data preparation, YOLOv8 training, testing, and evaluation of the rock detection model.'
            },
            {
                image: 'images/yolov8-dataset-flowchart.png',
                alt: 'Flowchart of the dataset scale variation experiment and YOLOv8 evaluation',
                caption: 'Workflow for the dataset scale variation experiment, dataset processing, training, and YOLOv8 model evaluation.'
            },
            {
                image: 'images/jumlah_datasetbatuan.png',
                alt: 'Chart of the distribution of the number of rocks across three classes',
                caption: 'Distribution chart of the dataset volume for coal, marble, and diorite classes.'
            },
            {
                image: 'images/grafik hasil deteksi.png',
                alt: 'Table showing the percentage of detection results for different dataset sizes',
                caption: 'Detection result percentages for the rock model based on dataset size variation.'
            }
        ],
        highlights: [
            {
                title: 'Project Overview',
                description: 'Developed a rock detection and classification system for three rock types (coal, diorite, and marble) in real time using Python and YOLOv8. This study evaluated the effect of dataset size variation on model performance through detection accuracy, stability, and video processing speed tests.'
            },
            {
                title: 'Problem',
                description: 'A structured experiment was needed to determine how changes in dataset scale affect accuracy, stability, and processing efficiency (inference speed) in the YOLOv8 object detection model. Without this evaluation, data allocation optimization cannot be measured objectively.'
            },
            {
                title: 'Action',
                description: [
                    'Designed a structured workflow (flowchart) to map the experimental process, from image collection, annotation, data augmentation, to systematic model testing.',
                    'Collected, annotated, cleaned, and augmented data samples using the Roboflow platform.',
                    'Trained and tested the YOLOv8 model using Python with six stepwise dataset scale variations.',
                    'Evaluated the model training results quantitatively based on Precision, Recall, F1-Score, mAP@0.5, and processing speed (FPS).',
                    'Tested the model directly with video inputs to assess detection stability.'
                ]
            },
            {
                title: 'Result',
                description: [
                    'Found the optimal configuration at 300 samples, which produced the best performance balance (mAP@0.5 of 97.6%, Precision 96.8%, and Recall 97.0%).',
                    'Identified that increasing the dataset scale too much (400–500 images) did not always improve performance and even caused a decline in some evaluation metrics.',
                    'Produced a tested, video-based object detection system that was documented analytically through performance evaluation graphs.'
                ]
            }
        ]
    },

    'hydroponic-classification': {
        title: 'Hydroponic Environment Parameter Automation & Classification System',
        category: 'Operational Monitoring & Automation',
        technologies: 'Python Programming · Random Forest · Data Preprocessing & Modeling · Process Control · Decision Support System · Desktop Application Development',
        description: 'Developed a hydroponic monitoring system based on a predictive model to classify temperature and pH conditions and support operational actions.',
        image: 'images/projek2.png',
        imageAlt: 'Preview of the hydroponic environment parameter automation and classification project',
        previewTitle: 'Project preview',
        previewCaption: 'Visual preview of the hydroponic environment parameter automation and classification project.',
        highlights: [
            {
                title: 'Project Overview',
                description: 'Development of a monitoring and classification system based on a predictive model (Random Forest) to control critical environmental parameters such as water temperature and pH, ensuring cultivation stability and operational decision accuracy.'
            },
            {
                title: 'Problem',
                description: 'Hydroponic environmental quality control faces challenges in evaluating multiple operational parameters simultaneously (temperature, water pH, and seasonal factors). Without a structured and automated evaluation system, mitigation of environmental mismatch risks becomes slow and prone to inconsistency.'
            },
            {
                title: 'Action',
                description: [
                    'Cleaned the data, processed it, and standardized operational variables (temperature, water pH, and season) as process parameters.',
                    'Built and trained a predictive classification model using the Random Forest algorithm to evaluate environmental suitability.',
                    'Integrated the predictive model into an interactive desktop application to simplify fast simulation and monitoring of parameters.',
                    'Designed an operational interface that presents real-time environmental status evaluations to support corrective action recommendations.'
                ]
            },
            {
                title: 'Result',
                description: [
                    'Created a predictive model-based control instrument that consistently automates hydroponic environmental suitability evaluation.',
                    'Integrated critical input parameters (temperature and pH) to minimize operational cultivation failure risk.',
                    'Provided a decision support system that speeds up the identification of environmental conditions and recommendations for corrective action with high accuracy.'
                ]
            }
        ]
    }
};

const projectId = new URLSearchParams(window.location.search).get('project');
const project = projectId && Object.prototype.hasOwnProperty.call(projects, projectId)
    ? projects[projectId]
    : null;
const content = document.querySelector('#project-detail-content');
const notFound = document.querySelector('#project-not-found');

if (!project) {
    notFound.hidden = false;
} else {
    document.title = `${project.title} | Robiatul Isnaini`;
    document.querySelector('#project-category').textContent = project.category;
    document.querySelector('#project-title').textContent = project.title;
    const projectDescription = project.description || project.highlights[0]?.description;
    document.querySelector('#project-description').textContent = Array.isArray(projectDescription)
        ? projectDescription.join(' ')
        : projectDescription || '';
    document.querySelector('#project-technologies').textContent = project.technologies;
    const githubLink = document.querySelector('#project-github-link');
    if (project.githubUrl) {
        githubLink.href = project.githubUrl;
        githubLink.hidden = false;
    }
    document.querySelector('#preview-title').textContent = project.previewTitle;
    document.querySelector('#preview-caption').textContent = project.previewCaption;

    const previewImage = document.querySelector('#preview-image');
    previewImage.src = project.image;
    previewImage.alt = project.imageAlt;

    const previewLink = document.querySelector('#preview-link');
    previewLink.href = project.image;

    const highlights = document.querySelector('#project-highlights');
    project.highlights.forEach((highlight) => {
        const section = document.createElement('article');
        section.className = 'project-highlight';

        const heading = document.createElement('h3');
        heading.textContent = highlight.title;

        let description;
        if (Array.isArray(highlight.description)) {
            description = document.createElement('ul');
            highlight.description.forEach((point) => {
                const item = document.createElement('li');
                item.textContent = point;
                description.append(item);
            });
        } else {
            description = document.createElement('p');
            description.textContent = highlight.description;
        }

        section.append(heading, description);
        highlights.append(section);
    });

    if (project.gallery) {
        const gallerySection = document.querySelector('#project-gallery-section');
        const gallery = document.querySelector('#project-gallery');

        project.gallery.forEach((item) => {
            const card = document.createElement('figure');
            card.className = 'experience-evidence-card';

            const button = document.createElement('button');
            button.className = 'experience-evidence-zoom';
            button.type = 'button';
            button.setAttribute('aria-label', `Enlarge image: ${item.alt}`);

            const image = document.createElement('img');
            image.src = item.image;
            image.alt = item.alt;
            button.append(image);

            const caption = document.createElement('figcaption');
            caption.className = 'experience-evidence-caption';
            const captionText = document.createElement('p');
            captionText.textContent = item.caption;
            caption.append(captionText);

            card.append(button, caption);
            gallery.append(card);
        });

        gallerySection.hidden = false;
    }

    content.hidden = false;
}

const evidenceDialog = document.querySelector('.experience-evidence-dialog');
const evidenceDialogImage = document.querySelector('.experience-evidence-dialog-image');
const evidenceDialogCaption = document.querySelector('.experience-evidence-dialog-caption');
const evidenceCloseButton = document.querySelector('.experience-evidence-close');

if (evidenceDialog && evidenceDialogImage && evidenceDialogCaption && evidenceCloseButton) {
    document.querySelectorAll('.experience-evidence-zoom').forEach((button) => {
        button.addEventListener('click', () => {
            const image = button.querySelector('img');
            const caption = button.closest('figure')?.querySelector('figcaption p');

            if (!image || !caption) {
                throw new Error('Project gallery image or caption not found.');
            }

            evidenceDialogImage.src = image.src;
            evidenceDialogImage.alt = image.alt;
            evidenceDialogCaption.textContent = caption.textContent;
            evidenceDialog.showModal();
        });
    });

    evidenceCloseButton.addEventListener('click', () => evidenceDialog.close());
    evidenceDialog.addEventListener('click', (event) => {
        if (event.target === evidenceDialog) {
            evidenceDialog.close();
        }
    });
}
