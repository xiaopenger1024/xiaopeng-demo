'use client';

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [showWechatQR, setShowWechatQR] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <Image
              src="/avatar.jpg"
              alt="笑鹏"
              width={200}
              height={200}
              className="rounded-full border-4 border-white dark:border-slate-700 shadow-2xl relative z-10"
              priority
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            笑鹏
          </h1>

          <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-4 font-medium">
            嵌入式架构师 & AI技术应用者
          </p>

          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            7年+嵌入式软件开发经验的自动化工程师，专注于医疗电子与消费电子<br />
            高级架构设计师，致力于推动公司嵌入式架构设计规范化<br />
            致力于 AI 技术学习应用，通过 AI 编程+智能体提效
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#skills"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              了解更多
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-slate-200 dark:border-slate-700"
            >
              联系我
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-800 dark:text-slate-100">
            我的技能
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-slate-100 dark:border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl mb-4 flex items-center justify-center text-white text-2xl">
                💻
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-100">嵌入式开发</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                精通多个平台的 MCU 固件开发、RTOS 应用等，拥有大型嵌入式系统开发经验。专注于医疗电子与消费电子领域。
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-slate-100 dark:border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl mb-4 flex items-center justify-center text-white text-2xl">
                🤖
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-100">AI 技术应用</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                研究 AI 与工作流融合，熟悉 AI 编程、智能体等开发应用，通过智能化工具提升开发效率。
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-slate-100 dark:border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl mb-4 flex items-center justify-center text-white text-2xl">
                🏗️
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-100">架构设计</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                高级架构设计师，致力于推动公司嵌入式架构设计规范化，具备丰富的技术预研经验。
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-slate-100 dark:border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl mb-4 flex items-center justify-center text-white text-2xl">
                📈
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-100">质量管理</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                丰富的开发质量提升和工程经验，善于规划技术方向和设计质量管控体系。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-800 dark:text-slate-100">
            我的作品
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-white">
              <div className="text-4xl mb-4">🚇</div>
              <h3 className="text-2xl font-bold mb-3">地铁暖通系统</h3>
              <p className="text-blue-100 leading-relaxed">
                洛阳地铁/深圳地铁磁悬浮暖通系统，为城市轨道交通提供可靠的环境控制解决方案。
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-white">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-3">核电冷却设备</h3>
              <p className="text-purple-100 leading-relaxed">
                国核示范堆大型冷却设备，参与国家重点核电项目的关键设备开发。
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-white">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-2xl font-bold mb-3">航天医疗设备</h3>
              <p className="text-green-100 leading-relaxed">
                天和核心舱宇航员专用彩超设备，为中国航天事业贡献技术力量。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-800 dark:text-slate-100">
            我的成就
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold mb-3 text-slate-800">卓越新星</h3>
              <p className="text-slate-700 leading-relaxed">
                格力电器董事长董明珠亲自授奖的"卓越新星"荣誉称号，表彰在技术创新领域的突出贡献。
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl mb-4">🎖️</div>
              <h3 className="text-2xl font-bold mb-3 text-white">技术成果奖</h3>
              <p className="text-blue-50 leading-relaxed">
                连续4年获得医疗设备类技术成果奖，持续在医疗电子领域创造价值。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-800 dark:text-slate-100">
            联系方式
          </h2>

          <div className="max-w-2xl mx-auto space-y-6">
            {/* 公众号暂时隐藏 */}
            {/* <a
              href="https://weixin.qq.com/r/mp/XiOttdXExIi7rZHW93ZM"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-slate-100 dark:border-slate-700"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white text-2xl flex-shrink-0">
                📱
              </div>
              <div>
                <div className="text-sm text-slate-500 dark:text-slate-400">公众号</div>
                <div className="font-semibold text-slate-800 dark:text-slate-100">笑鹏的技术世界</div>
              </div>
            </a> */}

            <div
              onClick={() => setShowWechatQR(!showWechatQR)}
              className="cursor-pointer bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-slate-100 dark:border-slate-700 overflow-hidden"
            >
              <div className="flex items-center gap-4 p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white text-2xl flex-shrink-0">
                  💬
                </div>
                <div className="flex-1">
                  <div className="text-sm text-slate-500 dark:text-slate-400">微信</div>
                  <div className="font-semibold text-slate-800 dark:text-slate-100">linxiaopenger</div>
                </div>
                <div className={`text-slate-400 transition-transform duration-300 ${showWechatQR ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <div className={`transition-all duration-300 ease-in-out ${showWechatQR ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-6 flex flex-col items-center">
                  <div className="text-center mb-3">
                    <p className="text-sm text-slate-600 dark:text-slate-400">扫码添加微信</p>
                  </div>
                  <Image
                    src="/wechat-qr.png"
                    alt="微信二维码"
                    width={200}
                    height={200}
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>

            {/* 知乎账号暂时隐藏 */}
            {/* <a
              href="https://www.zhihu.com/people/superoutstandingboy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-slate-100 dark:border-slate-700"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center text-white text-2xl flex-shrink-0">
                知
              </div>
              <div>
                <div className="text-sm text-slate-500 dark:text-slate-400">知乎</div>
                <div className="font-semibold text-slate-800 dark:text-slate-100">superoutstandingboy</div>
              </div>
            </a> */}

            <a
              href="https://blog.csdn.net/weixin_43680485"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-slate-100 dark:border-slate-700"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center text-white text-2xl flex-shrink-0">
                C
              </div>
              <div>
                <div className="text-sm text-slate-500 dark:text-slate-400">CSDN</div>
                <div className="font-semibold text-slate-800 dark:text-slate-100">技术博客</div>
              </div>
            </a>

            <a
              href="https://github.com/xiaopenger1024"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-slate-100 dark:border-slate-700"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-900 dark:from-slate-600 dark:to-slate-800 rounded-xl flex items-center justify-center text-white text-2xl flex-shrink-0">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-slate-500 dark:text-slate-400">GitHub</div>
                <div className="font-semibold text-slate-800 dark:text-slate-100">xiaopenger1024</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-900 dark:bg-slate-950 text-center">
        <p className="text-slate-400">
          © 2025 笑鹏. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
