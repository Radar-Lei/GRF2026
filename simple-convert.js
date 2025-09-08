// useage: node simple-convert.js
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

async function convertHtmlToPng() {
    console.log('开始转换 HTML 到 PNG...');
    
    try {
        // 读取 HTML 文件内容
        const htmlFilePath = path.join(__dirname, './figs/Reearch Project Gantt.html');
        const htmlContent = fs.readFileSync(htmlFilePath, 'utf8');
        
        // 启动浏览器
        const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        
        const page = await browser.newPage();
        
        // 设置更大的视口以适应甘特图
        await page.setViewport({ width: 2800, height: 1600 });
        
        // 加载 HTML 内容
        await page.setContent(htmlContent, { waitUntil: 'networkidle0', timeout: 60000 });
        
        console.log('页面加载完成，等待渲染...');
        
        // 等待页面完全渲染
        await new Promise(resolve => setTimeout(resolve, 5000));
        
        // 截图整个页面
        const screenshot = await page.screenshot({
            type: 'png',
            fullPage: true,
            encoding: 'binary'
        });
        
        // 保存 PNG 文件
        const outputPath = path.join(__dirname, 'gantt-chart.png');
        fs.writeFileSync(outputPath, screenshot);
        
        console.log('转换成功！PNG 文件已保存为: gantt-chart.png');
        console.log('文件大小:', Math.round(screenshot.length / 1024) + ' KB');
        
        await browser.close();
        
    } catch (error) {
        console.error('转换过程中发生错误:', error);
        process.exit(1);
    }
}

convertHtmlToPng();