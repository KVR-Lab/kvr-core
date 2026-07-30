import { ControlPlaneService } from './control-plane.service';
export declare class ControlPlaneController {
    private readonly controlPlane;
    constructor(controlPlane: ControlPlaneService);
    overview(): {
        النظام: string;
        الدور: string;
        الحالة: string;
        الوحدات: string[];
    };
    health(): {
        النظام: string;
        الحالة: string;
        الوقت: string;
    };
    projects(): {
        النظام: string;
        المشاريع: {
            الاسم: string;
            الحالة: string;
            المسار: string;
        }[];
    };
    agents(): {
        النظام: string;
        الوكلاء: {
            الاسم: string;
            الحالة: string;
            الدور: string;
        }[];
    };
    runtime(): {
        النظام: string;
        المحرك: {
            الحالة: string;
            الحلقة_التشغيلية: string;
            المخطط: string;
            المنفذ: string;
        };
    };
    commands(): {
        النظام: string;
        الأوامر: {
            الأمر: string;
            الوصف: string;
        }[];
    };
    dashboard(): {
        النظام: string;
        الحالة: string;
        الوقت: string;
        المشاريع: {
            النظام: string;
            المشاريع: {
                الاسم: string;
                الحالة: string;
                المسار: string;
            }[];
        };
        الوكلاء: {
            النظام: string;
            الوكلاء: {
                الاسم: string;
                الحالة: string;
                الدور: string;
            }[];
        };
        المحرك: {
            النظام: string;
            المحرك: {
                الحالة: string;
                الحلقة_التشغيلية: string;
                المخطط: string;
                المنفذ: string;
            };
        };
        الأوامر: {
            النظام: string;
            الأوامر: {
                الأمر: string;
                الوصف: string;
            }[];
        };
    };
    connect(): {
        النظام: string;
        المشروع: string;
        الحالة: string;
        المسار: string;
        الخدمات: string[];
        وقت_الاتصال: string;
    };
    logs(): {
        النظام: string;
        السجلات: {
            الوقت: string;
            المستوى: string;
            الرسالة: string;
        }[];
    };
    memory(): {
        النظام: string;
        الذاكرة: {
            الحالة: string;
            عدد_الجلسات: number;
            العناصر: number;
            آخر_تحديث: string;
        };
    };
    settings(): {
        النظام: string;
        الإعدادات: {
            اللغة: string;
            البيئة: string;
            المشروع_الافتراضي: string;
            التحديث_التلقائي: boolean;
            الوضع_الداكن: boolean;
        };
    };
    chat(body: {
        message: string;
    }): Promise<{
        النظام: string;
        المشاريع: {
            الاسم: string;
            الحالة: string;
            المسار: string;
        }[];
    } | {
        النظام: string;
        الوكلاء: {
            الاسم: string;
            الحالة: string;
            الدور: string;
        }[];
    } | {
        النظام: string;
        المحرك: {
            الحالة: string;
            الحلقة_التشغيلية: string;
            المخطط: string;
            المنفذ: string;
        };
    } | {
        النظام: string;
        الحالة: string;
        الوقت: string;
        المشاريع: {
            النظام: string;
            المشاريع: {
                الاسم: string;
                الحالة: string;
                المسار: string;
            }[];
        };
        الوكلاء: {
            النظام: string;
            الوكلاء: {
                الاسم: string;
                الحالة: string;
                الدور: string;
            }[];
        };
        المحرك: {
            النظام: string;
            المحرك: {
                الحالة: string;
                الحلقة_التشغيلية: string;
                المخطط: string;
                المنفذ: string;
            };
        };
        الأوامر: {
            النظام: string;
            الأوامر: {
                الأمر: string;
                الوصف: string;
            }[];
        };
    } | {
        النظام: string;
        السجلات: {
            الوقت: string;
            المستوى: string;
            الرسالة: string;
        }[];
    } | {
        النظام: string;
        الذاكرة: {
            الحالة: string;
            عدد_الجلسات: number;
            العناصر: number;
            آخر_تحديث: string;
        };
    } | {
        النظام: string;
        الإعدادات: {
            اللغة: string;
            البيئة: string;
            المشروع_الافتراضي: string;
            التحديث_التلقائي: boolean;
            الوضع_الداكن: boolean;
        };
    } | {
        النظام: string;
        العملية: string;
        الحالة: string;
        الناتج: string;
        الخطأ: string;
        الوقت: string;
        الخدمة?: undefined;
        الرسالة?: undefined;
        السؤال?: undefined;
        الرد?: undefined;
    } | {
        النظام: string;
        العملية: string;
        الحالة: string;
        الناتج: string;
        الوقت: string;
        الخطأ?: undefined;
        الخدمة?: undefined;
        الرسالة?: undefined;
        السؤال?: undefined;
        الرد?: undefined;
    } | {
        النظام: string;
        الخدمة: string;
        الحالة: string;
        الوقت: string;
        العملية?: undefined;
        الناتج?: undefined;
        الخطأ?: undefined;
        الرسالة?: undefined;
        السؤال?: undefined;
        الرد?: undefined;
    } | {
        النظام: string;
        العملية: string;
        الحالة: string;
        الرسالة: string;
        الوقت: string;
        الناتج?: undefined;
        الخطأ?: undefined;
        الخدمة?: undefined;
        السؤال?: undefined;
        الرد?: undefined;
    } | {
        النظام: string;
        السؤال: string;
        الرد: string;
        الوقت: string;
        العملية?: undefined;
        الحالة?: undefined;
        الناتج?: undefined;
        الخطأ?: undefined;
        الخدمة?: undefined;
        الرسالة?: undefined;
    } | {
        النظام: string;
        الحالة: string;
        الرسالة: any;
        الوقت: string;
        العملية?: undefined;
        الناتج?: undefined;
        الخطأ?: undefined;
        الخدمة?: undefined;
        السؤال?: undefined;
        الرد?: undefined;
    }>;
    startAgent(body: {
        name: string;
    }): {
        النظام: string;
        الوكيل: string;
        الحالة: string;
        الوقت: string;
    };
    stopAgent(body: {
        name: string;
    }): {
        النظام: string;
        الوكيل: string;
        الحالة: string;
        الوقت: string;
    };
    openProject(body: {
        name: string;
    }): Promise<{
        النظام: string;
        المشروع: string;
        الحالة: string;
        المسار: string;
        الوقت: string;
        الرسالة?: undefined;
    } | {
        النظام: string;
        الحالة: string;
        الرسالة: any;
        الوقت: string;
        المشروع?: undefined;
        المسار?: undefined;
    }>;
}
