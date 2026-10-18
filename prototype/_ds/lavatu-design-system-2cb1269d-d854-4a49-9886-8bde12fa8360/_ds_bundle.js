/* @ds-bundle: {"format":4,"namespace":"LavatuDesignSystem_2cb126","components":[{"name":"MaterialCard","sourcePath":"components/cards/MaterialCard.jsx"},{"name":"ProductCard","sourcePath":"components/cards/ProductCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"CategoryBadge","sourcePath":"components/core/CategoryBadge.jsx"},{"name":"StatusBadge","sourcePath":"components/core/StatusBadge.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"FilterChip","sourcePath":"components/core/Tag.jsx"},{"name":"StatCard","sourcePath":"components/data/StatCard.jsx"},{"name":"Table","sourcePath":"components/data/Table.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"SearchInput","sourcePath":"components/forms/SearchInput.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"SidebarNavItem","sourcePath":"components/navigation/SidebarNavItem.jsx"}],"sourceHashes":{"components/cards/MaterialCard.jsx":"4236e2c527ac","components/cards/ProductCard.jsx":"e6b69539659f","components/core/Badge.jsx":"d04dbacb9ff3","components/core/Button.jsx":"ba4fd28f28a1","components/core/CategoryBadge.jsx":"87587ebb0e17","components/core/StatusBadge.jsx":"e14e4237c707","components/core/Tag.jsx":"463d08153c55","components/data/StatCard.jsx":"6c77e4f40b87","components/data/Table.jsx":"fca54aa91871","components/forms/Checkbox.jsx":"8d6a4d09fef4","components/forms/Input.jsx":"2db2bd481aa6","components/forms/SearchInput.jsx":"cf72ff93d72c","components/forms/Select.jsx":"9458c3d13f5f","components/navigation/Pagination.jsx":"3ecb4957efc9","components/navigation/SidebarNavItem.jsx":"87491296a58c","ui_kits/business-dashboard/ProductManagement.jsx":"301b6c6573c4","ui_kits/business-dashboard/Sidebar.jsx":"e0bd457454ed","ui_kits/marketing-home/Categories.jsx":"2c25d57afa1b","ui_kits/marketing-home/Footer.jsx":"c70fe405aeba","ui_kits/marketing-home/Header.jsx":"6c2dcb4cda9d","ui_kits/marketing-home/Hero.jsx":"c9181c217d3c","ui_kits/marketing-home/NewsCTA.jsx":"fd9ca67c5e57","ui_kits/marketing-home/Process.jsx":"02d8099cb095"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LavatuDesignSystem_2cb126 = window.LavatuDesignSystem_2cb126 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/MaterialCard.jsx
try { (() => {
function MaterialCard({
  order,
  title,
  material = "e-waste",
  color,
  icon,
  image,
  description = [],
  tags = [],
  cta = "Khám phá nguồn vật liệu"
}) {
  const [hover, setHover] = React.useState(false);
  const tone = color || `var(--color-material-${material})`;
  return /*#__PURE__*/React.createElement("a", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      gap: "var(--space-3)",
      overflow: "hidden",
      textDecoration: "none",
      cursor: "pointer",
      borderRadius: "var(--radius-xl)",
      border: "1px solid var(--color-border-default)",
      background: "var(--color-bg-page)",
      padding: "var(--space-8) var(--space-6)",
      boxShadow: hover ? "var(--shadow-raised)" : "var(--shadow-card)",
      transition: "box-shadow 200ms ease"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      width: 210,
      flexShrink: 0
    }
  }, order && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-overline)",
      letterSpacing: "var(--tracking-overline)",
      color: "var(--color-text-muted)"
    }
  }, order), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: "var(--space-1)",
      height: 2,
      width: 28,
      borderRadius: "var(--radius-full)",
      background: "var(--color-accent)"
    }
  }), icon && /*#__PURE__*/React.createElement("img", {
    src: icon,
    alt: "",
    width: 32,
    height: 32,
    style: {
      marginTop: "var(--space-4)"
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "var(--space-4) 0 0",
      font: "var(--type-h3)",
      letterSpacing: "var(--tracking-heading)",
      color: tone
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--space-2) 0 0",
      font: "var(--type-body-sm)",
      color: "var(--color-text-body)"
    }
  }, description.map((line, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, line, i < description.length - 1 && /*#__PURE__*/React.createElement("br", null)))), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-3)",
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-2)"
    }
  }, tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      padding: "2px 10px",
      borderRadius: "var(--radius-full)",
      background: "var(--color-bg-muted)",
      font: "var(--type-label-sm)",
      color: "var(--color-text-body)"
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      height: 32,
      alignItems: "center",
      padding: "0 var(--space-4)",
      whiteSpace: "nowrap",
      borderRadius: "var(--radius-full)",
      border: "1px solid var(--color-border-default)",
      font: "var(--type-label-md)",
      color: tone
    }
  }, cta))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      justifyContent: "flex-end",
      minWidth: 0
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: "100%",
      maxWidth: 273,
      height: "auto",
      objectFit: "contain"
    }
  })));
}
Object.assign(__ds_scope, { MaterialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/MaterialCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/ProductCard.jsx
try { (() => {
function ProductCard({
  image,
  category,
  title,
  weight,
  unit,
  price,
  company,
  region
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      borderRadius: "var(--radius-2xl)",
      border: "1px solid rgba(226,232,240,0.8)",
      background: "#fff",
      boxShadow: "var(--shadow-card)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "393/208",
      background: "#f1f5f9",
      overflow: "hidden"
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: 12,
      left: 12,
      borderRadius: 999,
      border: "1px solid rgba(0,0,0,0.05)",
      background: "rgba(255,255,255,0.95)",
      padding: "4px 12px",
      fontFamily: "var(--font-display)",
      fontSize: 12,
      fontWeight: 600,
      color: "#14532d"
    }
  }, category)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      flex: 1,
      padding: "11px 20px 20px"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: 16,
      fontWeight: 700,
      color: "#0f172a"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      display: "flex",
      flexDirection: "column",
      gap: 2,
      fontFamily: "var(--font-display)",
      fontSize: 16,
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "#0f172a"
    }
  }, weight, " ", unit), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "#14532d"
    }
  }, price, " VN\u0110/", unit)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
      borderTop: "1px solid #f1f5f9",
      paddingTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      fontFamily: "var(--font-display)",
      fontSize: 12,
      color: "#64748b",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", null, company), /*#__PURE__*/React.createElement("span", null, region)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4,
      fontFamily: "var(--font-display)",
      fontSize: 12,
      fontWeight: 600,
      color: "#14532d",
      whiteSpace: "nowrap"
    }
  }, "Xem chi ti\u1EBFt", /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 24,
      height: 24,
      borderRadius: "50%",
      background: "#f1f5f9"
    }
  }, "\u203A")))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const tones = {
  success: {
    background: "var(--color-success-soft)",
    color: "var(--color-success)",
    dot: "var(--color-success)"
  },
  warning: {
    background: "var(--color-warning-soft)",
    color: "var(--color-warning)",
    dot: "var(--color-warning)"
  },
  danger: {
    background: "var(--color-danger-soft)",
    color: "var(--color-danger)",
    dot: "var(--color-danger)"
  },
  neutral: {
    background: "var(--color-bg-muted)",
    color: "var(--color-text-muted)",
    dot: "var(--color-text-subtle)"
  },
  accent: {
    background: "var(--color-bg-accent-soft)",
    color: "var(--color-accent-strong)",
    dot: "var(--color-accent)"
  },
  soon: {
    background: "var(--color-bg-brand)",
    color: "var(--color-text-inverse)",
    dot: "var(--color-accent)"
  }
};
const defaults = {
  success: "Đã duyệt",
  warning: "Chờ duyệt",
  danger: "Bị từ chối",
  neutral: "Nháp",
  accent: "Mới",
  soon: "Sắp ra mắt"
};
function Badge({
  children,
  tone = "neutral",
  dot = true
}) {
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 24,
      padding: "0 10px",
      borderRadius: "var(--radius-full)",
      font: "var(--type-label-sm)",
      whiteSpace: "nowrap",
      background: t.background,
      color: t.color
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: t.dot,
      flexShrink: 0
    }
  }), children ?? defaults[tone]);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const sizeMap = {
  s: "s",
  sm: "s",
  m: "m",
  md: "m",
  l: "l",
  lg: "l"
};
const sizes = {
  s: {
    height: 32,
    padding: "0 12px",
    font: "var(--type-label-sm)",
    gap: 6,
    radius: "var(--radius-sm)"
  },
  m: {
    height: 40,
    padding: "0 16px",
    font: "var(--type-label-md)",
    gap: 8,
    radius: "var(--radius-md)"
  },
  l: {
    height: 48,
    padding: "0 24px",
    font: "var(--type-label-lg)",
    gap: 8,
    radius: "var(--radius-md)"
  }
};
// v1 variant names map onto the 3 v2 styles
const variantMap = {
  primary: "primary",
  emerald: "primary",
  destructive: "primary",
  secondary: "secondary",
  outline: "secondary",
  ghost: "ghost"
};
const look = {
  primary: {
    default: {
      background: "var(--color-action-primary)",
      color: "var(--color-action-on-primary)",
      border: "1px solid transparent"
    },
    hover: {
      background: "var(--color-action-primary-hover)",
      color: "var(--color-action-on-primary)",
      border: "1px solid transparent"
    },
    disabled: {
      background: "var(--color-action-disabled)",
      color: "var(--color-action-on-disabled)",
      border: "1px solid transparent"
    }
  },
  secondary: {
    default: {
      background: "var(--color-action-secondary)",
      color: "var(--color-action-on-secondary)",
      border: "1px solid var(--color-action-secondary-border)"
    },
    hover: {
      background: "var(--color-action-secondary-hover)",
      color: "var(--color-action-on-secondary)",
      border: "1px solid var(--color-action-secondary-border)"
    },
    disabled: {
      background: "var(--color-action-disabled)",
      color: "var(--color-action-on-disabled)",
      border: "1px solid var(--color-border-default)"
    }
  },
  ghost: {
    default: {
      background: "transparent",
      color: "var(--color-action-on-secondary)",
      border: "1px solid transparent"
    },
    hover: {
      background: "var(--color-action-ghost-hover)",
      color: "var(--color-action-on-secondary)",
      border: "1px solid transparent"
    },
    disabled: {
      background: "transparent",
      color: "var(--color-action-on-disabled)",
      border: "1px solid transparent"
    }
  }
};
function Button({
  children,
  variant = "primary",
  size = "m",
  state,
  disabled = false,
  icon = null,
  iconRight = null,
  onClick,
  type = "button"
}) {
  const [hover, setHover] = React.useState(false);
  const s = sizes[sizeMap[size] || "m"];
  const v = look[variantMap[variant] || "primary"];
  const isDisabled = disabled || state === "disabled";
  const st = isDisabled ? "disabled" : state === "hover" || hover ? "hover" : "default";
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: isDisabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      font: s.font,
      borderRadius: s.radius,
      cursor: isDisabled ? "not-allowed" : "pointer",
      whiteSpace: "nowrap",
      transition: "background-color 150ms ease, color 150ms ease",
      ...v[st]
    }
  }, icon, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/CategoryBadge.jsx
try { (() => {
const order = ["e-waste", "textile", "agri", "metal", "plastic", "paper"];
function CategoryBadge({
  children,
  material,
  index = 0
}) {
  const key = material || order[index % order.length];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      height: 28,
      padding: "0 12px",
      borderRadius: "var(--radius-sm)",
      font: "var(--type-label-md)",
      color: "var(--color-text-inverse)",
      background: `var(--color-material-${key})`,
      whiteSpace: "nowrap"
    }
  }, children);
}
Object.assign(__ds_scope, { CategoryBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/CategoryBadge.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusBadge.jsx
try { (() => {
// Product-listing statuses mapped onto v2 Badge tones
const map = {
  visible: ["success", "Đang hiển thị"],
  pending: ["warning", "Chờ duyệt"],
  hidden: ["neutral", "Đang ẩn"],
  draft: ["neutral", "Nháp"],
  sold: ["accent", "Đã bán"],
  rejected: ["danger", "Bị từ chối"]
};
function StatusBadge({
  status = "visible"
}) {
  const [tone, label] = map[status] || ["neutral", status];
  return /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: tone
  }, label);
}
Object.assign(__ds_scope, { StatusBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusBadge.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      borderRadius: "var(--radius-full)",
      background: "var(--color-bg-muted)",
      padding: "4px 12px",
      font: "var(--type-label-sm)",
      color: "var(--color-text-body)"
    }
  }, children);
}
function FilterChip({
  children,
  active = false,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    style: {
      flexShrink: 0,
      borderRadius: "var(--radius-full)",
      padding: "8px 16px",
      font: "var(--type-label-md)",
      cursor: "pointer",
      border: `1px solid ${active ? "var(--color-action-secondary-border)" : "var(--color-border-strong)"}`,
      background: active ? "var(--color-action-secondary)" : "var(--color-bg-page)",
      color: active ? "var(--color-action-on-secondary)" : "var(--color-text-body)",
      transition: "all 150ms ease"
    }
  }, children);
}
Object.assign(__ds_scope, { Tag, FilterChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/StatCard.jsx
try { (() => {
const toneVar = {
  brand: "var(--color-text-heading)",
  success: "var(--color-success)",
  warning: "var(--color-warning)",
  danger: "var(--color-danger)",
  neutral: "var(--color-text-muted)"
};
const softVar = {
  brand: "var(--color-bg-brand-soft)",
  success: "var(--color-success-soft)",
  warning: "var(--color-warning-soft)",
  danger: "var(--color-danger-soft)",
  neutral: "var(--color-bg-muted)"
};
function StatCard({
  label,
  value,
  unit,
  delta,
  tone = "brand",
  icon = null
}) {
  const t = toneVar[tone] ? tone : "brand";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "var(--space-4)",
      borderRadius: "var(--radius-lg)",
      border: "1px solid var(--color-border-default)",
      background: "var(--color-bg-page)",
      padding: "var(--space-5) var(--space-6)",
      boxShadow: "var(--shadow-card)",
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--type-label-md)",
      color: "var(--color-text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--space-2) 0 0",
      display: "flex",
      alignItems: "baseline",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-h2)",
      letterSpacing: "var(--tracking-heading)",
      color: toneVar[t]
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--color-text-muted)"
    }
  }, unit)), delta && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--space-1) 0 0",
      font: "var(--type-caption)",
      color: "var(--color-text-muted)"
    }
  }, delta)), icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      flexShrink: 0,
      borderRadius: "var(--radius-md)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: softVar[t],
      color: toneVar[t]
    }
  }, icon));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/data/Table.jsx
try { (() => {
function Table({
  columns = [],
  rows = []
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "hidden",
      borderRadius: "var(--radius-md)",
      border: "1px solid #e0e6e2"
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("thead", {
    style: {
      background: "var(--color-brand-emerald)"
    }
  }, /*#__PURE__*/React.createElement("tr", null, columns.map(col => /*#__PURE__*/React.createElement("th", {
    key: col,
    style: {
      padding: "16px 20px",
      color: "#fff",
      fontSize: 13,
      fontWeight: 500,
      textAlign: "center"
    }
  }, col)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((row, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: {
      borderBottom: "1px solid #eef2ef"
    }
  }, row.map((cell, j) => /*#__PURE__*/React.createElement("td", {
    key: j,
    style: {
      padding: "18px 20px",
      fontSize: 14,
      color: "var(--color-brand-ink)",
      verticalAlign: "middle"
    }
  }, cell)))))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Table.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked = false,
  onChange
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      cursor: "pointer",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: 4,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: checked ? "1px solid var(--color-brand-green)" : "1px solid var(--color-brand-line)",
      background: checked ? "var(--color-brand-green)" : "#fff",
      transition: "all 150ms ease"
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 12 10",
    width: "10",
    height: "8",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 5l3.5 3.5L11 1",
    stroke: "#fff",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--color-brand-text)"
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  placeholder = "",
  type = "text",
  value,
  onChange,
  icon = null
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 14,
      display: "flex",
      color: "var(--color-text-subtle)"
    }
  }, icon), /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    style: {
      height: 44,
      width: "100%",
      borderRadius: "var(--radius-md)",
      border: "1px solid var(--color-border-strong)",
      background: "var(--color-bg-page)",
      padding: icon ? "0 16px 0 40px" : "0 16px",
      font: "var(--type-body-sm)",
      color: "var(--color-text-heading)",
      outline: "none"
    }
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchInput.jsx
try { (() => {
const SearchIcon = () => /*#__PURE__*/React.createElement("svg", {
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "11",
  cy: "11",
  r: "8"
}), /*#__PURE__*/React.createElement("path", {
  d: "m21 21-4.3-4.3"
}));
function SearchInput({
  placeholder = "Tìm vật liệu, doanh nghiệp…",
  value,
  onChange,
  size = "m",
  state,
  onSubmit
}) {
  const [focus, setFocus] = React.useState(false);
  const active = state === "focus" || focus;
  const h = size === "l" ? 56 : 44;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      height: h,
      padding: size === "l" ? "0 8px 0 20px" : "0 14px",
      borderRadius: "var(--radius-full)",
      background: "var(--color-bg-page)",
      border: `1px solid ${active ? "var(--color-border-focus)" : "var(--color-border-strong)"}`,
      boxShadow: active ? "0 0 0 3px var(--prim-green-100)" : "none",
      transition: "border-color 150ms, box-shadow 150ms",
      color: active ? "var(--color-text-brand)" : "var(--color-text-subtle)"
    }
  }, /*#__PURE__*/React.createElement(SearchIcon, null), /*#__PURE__*/React.createElement("input", {
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    onKeyDown: e => {
      if (e.key === "Enter" && onSubmit) onSubmit(e.currentTarget.value);
    },
    style: {
      flex: 1,
      minWidth: 0,
      height: "100%",
      border: "none",
      outline: "none",
      background: "transparent",
      font: "var(--type-body-md)",
      color: "var(--color-text-heading)"
    }
  }), size === "l" && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onSubmit && onSubmit(value),
    style: {
      height: 40,
      padding: "0 20px",
      borderRadius: "var(--radius-full)",
      border: "none",
      cursor: "pointer",
      background: "var(--color-action-primary)",
      color: "var(--color-action-on-primary)",
      font: "var(--type-label-md)"
    }
  }, "T\xECm ki\u1EBFm"));
}
Object.assign(__ds_scope, { SearchInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  options = [],
  value,
  onChange,
  placeholder
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: onChange,
    style: {
      height: 44,
      width: "100%",
      appearance: "none",
      borderRadius: "var(--radius-md)",
      border: "1px solid var(--color-brand-line)",
      background: "#fff",
      padding: "0 36px 0 16px",
      fontSize: 14,
      fontFamily: "var(--font-sans)",
      color: "var(--color-brand-ink)",
      outline: "none",
      cursor: "pointer"
    }
  }, placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(opt => /*#__PURE__*/React.createElement("option", {
    key: opt.value,
    value: opt.value
  }, opt.label))), /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "8",
    viewBox: "0 0 12 8",
    fill: "none",
    style: {
      position: "absolute",
      right: 14,
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1.5L6 6.5L11 1.5",
    stroke: "#707974",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function Pagination({
  page = 1,
  totalPages = 1,
  onChange
}) {
  const pages = Array.from({
    length: Math.min(totalPages, 5)
  }, (_, i) => i + 1);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onChange?.(Math.max(1, page - 1)),
    style: {
      borderRadius: 8,
      border: "1px solid #d9e1dd",
      background: "#fff",
      padding: "8px 12px",
      cursor: "pointer"
    }
  }, "\u2039"), pages.map(p => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => onChange?.(p),
    style: {
      borderRadius: 8,
      padding: "8px 16px",
      fontWeight: 600,
      cursor: "pointer",
      border: "none",
      background: p === page ? "var(--color-brand-emerald)" : "#fff",
      color: p === page ? "#fff" : "var(--color-brand-ink)"
    }
  }, p)), /*#__PURE__*/React.createElement("button", {
    onClick: () => onChange?.(Math.min(totalPages, page + 1)),
    style: {
      borderRadius: 8,
      border: "1px solid #d9e1dd",
      background: "#fff",
      padding: "8px 12px",
      cursor: "pointer"
    }
  }, "\u203A"));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SidebarNavItem.jsx
try { (() => {
function SidebarNavItem({
  label,
  icon = null,
  active = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      borderRadius: 5,
      padding: "12px 16px",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      fontWeight: 500,
      background: active ? "var(--color-brand-emerald)" : "transparent",
      color: active ? "#fff" : "#4b544f",
      boxShadow: active ? "0 1px 2px rgba(0,0,0,0.05)" : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      filter: active ? "brightness(0) invert(1)" : "none"
    }
  }, icon), /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { SidebarNavItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SidebarNavItem.jsx", error: String((e && e.message) || e) }); }

// ui_kits/business-dashboard/ProductManagement.jsx
try { (() => {
function ProductManagement() {
  const {
    StatCard,
    Table,
    StatusBadge,
    CategoryBadge,
    Button,
    Pagination
  } = window.LavatuDesignSystem_2cb126;
  const rows = [["LVP-00231", "Nhôm phế liệu đóng kiện", /*#__PURE__*/React.createElement(CategoryBadge, {
    index: 3
  }, "Kim lo\u1EA1i"), "12/09/2026", "1.200", "18.000 VND", /*#__PURE__*/React.createElement(StatusBadge, {
    status: "visible"
  })], ["LVP-00230", "Vải vụn cotton loại A", /*#__PURE__*/React.createElement(CategoryBadge, {
    index: 1
  }, "V\u1EA3i & D\u1EC7t may"), "10/09/2026", "800", "9.500 VND", /*#__PURE__*/React.createElement(StatusBadge, {
    status: "pending"
  })], ["LVP-00229", "Nhựa PET đã ép kiện", /*#__PURE__*/React.createElement(CategoryBadge, {
    index: 4
  }, "Nh\u1EF1a"), "08/09/2026", "2.000", "6.200 VND", /*#__PURE__*/React.createElement(StatusBadge, {
    status: "hidden"
  })], ["LVP-00228", "Giấy carton đã qua sử dụng", /*#__PURE__*/React.createElement(CategoryBadge, {
    index: 5
  }, "Gi\u1EA5y, carton"), "05/09/2026", "3.500", "3.100 VND", /*#__PURE__*/React.createElement(StatusBadge, {
    status: "sold"
  })]];
  return /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      background: "#fff",
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 36,
      fontWeight: 700,
      color: "#064E3B",
      margin: 0
    }
  }, "Qu\u1EA3n l\xFD s\u1EA3n ph\u1EA9m"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 8,
      fontSize: 16,
      color: "#404944"
    }
  }, "Qu\u1EA3n l\xFD v\xE0 ki\u1EC3m so\xE1t to\xE0n b\u1ED9 b\xE0i \u0111\u0103ng v\u1EADt li\u1EC7u tr\xEAn n\u1EC1n t\u1EA3ng Lavatu.")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "+"
  }, "\u0110\u0103ng b\xE1n v\u1EADt li\u1EC7u")), /*#__PURE__*/React.createElement("section", {
    style: {
      marginTop: 28,
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "T\u1ED5ng b\xE0i \u0111\u0103ng",
    value: "1.284",
    tone: "#064E3B"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "\u0110ang hi\u1EC3n th\u1ECB",
    value: "742",
    tone: "#F3B900"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Ch\u1EDD duy\u1EC7t",
    value: "58",
    tone: "#3164E0"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "\u0110\xE3 b\xE1n",
    value: "312",
    tone: "#7036B9"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Table, {
    columns: ["ID", "Tên vật liệu", "Loại vật liệu", "Ngày đăng", "Số lượng", "Đơn giá", "Trạng thái"],
    rows: rows
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(Pagination, {
    page: 1,
    totalPages: 5
  })));
}
window.ProductManagement = ProductManagement;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/business-dashboard/ProductManagement.jsx", error: String((e && e.message) || e) }); }

// ui_kits/business-dashboard/Sidebar.jsx
try { (() => {
const PRIMARY_ITEMS = [["Thông tin doanh nghiệp", "ic-business-info.svg", true], ["Dashboard", "ic-dashboard.svg", false], ["Quản lý đơn hàng", "ic-order.svg", false], ["Quản lý đánh giá", "ic-review.svg", false], ["Quản lý tài liệu", "ic-document.svg", false], ["Quản lý khiếu nại", "ic-complaint.svg", false], ["Quản lý sản phẩm", "ic-product.svg", true], ["Quản lý thanh toán", "ic-payment.svg", false], ["Quản lý mã giảm giá", "ic-voucher.svg", false], ["Lịch sử mua hàng", "ic-history.svg", false]];
const SECONDARY_ITEMS = [["Xác minh", "ic-verify.svg"], ["Bảo mật", "ic-security.svg"], ["Cài đặt", "ic-settings.svg"]];
function Sidebar({
  active = "Quản lý sản phẩm"
}) {
  const row = (label, icon) => {
    const isActive = label === active;
    return /*#__PURE__*/React.createElement("a", {
      key: label,
      href: "#",
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        borderRadius: 5,
        padding: "12px 16px",
        fontSize: 14,
        fontWeight: 500,
        textDecoration: "none",
        background: isActive ? "#064E3B" : "transparent",
        color: isActive ? "#fff" : "#4B544F"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: `../../assets/business-profile/icons/${icon}`,
      alt: "",
      width: 18,
      height: 18,
      style: isActive ? {
        filter: "brightness(0) invert(1)"
      } : undefined
    }), label);
  };
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 300,
      flexShrink: 0,
      background: "#F2F4F1",
      borderRight: "1px solid rgba(191,201,195,0.3)",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 12,
      padding: 20,
      borderBottom: "1px solid rgba(191,201,195,0.2)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      height: 72,
      borderRadius: "50%",
      background: "#064E3B",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 24,
      fontWeight: 700
    }
  }, "CX"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 18,
      fontWeight: 600
    }
  }, "C\xF4ng ty TNHH T\xE1i ch\u1EBF Xanh"), /*#__PURE__*/React.createElement("span", {
    style: {
      borderRadius: 999,
      padding: "4px 12px",
      fontSize: 12,
      fontWeight: 700,
      color: "#fff",
      background: "#064E3B"
    }
  }, "T\xE0i kho\u1EA3n doanh nghi\u1EC7p"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      color: "#404944"
    }
  }, "Ng\xE0y tham gia: 12/03/2025")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: "16px 8px",
      flex: 1
    }
  }, PRIMARY_ITEMS.map(([l, i]) => row(l, i)), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid rgba(191,201,195,0.3)",
      margin: "8px 0"
    }
  }), SECONDARY_ITEMS.map(([l, i]) => row(l, i))));
}
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/business-dashboard/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-home/Categories.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CARDS = [{
  order: "01",
  title: "Rác điện tử",
  color: "#0F6554",
  icon: "../../assets/landing/danhmuc-icon-electronic.svg",
  image: "../../assets/landing/danhmuc-electronic.webp",
  description: ["Kết nối nguồn thiết bị điện,", "linh kiện và vật liệu điện tử", "với đơn vị phù hợp."],
  tags: ["Thiết bị linh kiện", "PCB", "Linh kiện"]
}, {
  order: "02",
  title: "Vải & Dệt may",
  color: "#BC7F11",
  icon: "../../assets/landing/danhmuc-icon-fabric.svg",
  image: "../../assets/landing/danhmuc-fabric.webp",
  description: ["Khám phá nguồn vải thừa", "và vật liệu dệt may có", "khả năng tái sử dụng."],
  tags: ["Vải thừa", "Vải vụn", "Sợi"]
}, {
  order: "03",
  title: "Phụ phẩm nông nghiệp",
  color: "#828009",
  icon: "../../assets/landing/danhmuc-icon-agri.svg",
  image: "../../assets/landing/danhmuc-agri.webp",
  description: ["Khám phá các phụ phẩm", "có tiềm năng trở thành", "nguyên liệu thứ cấp."],
  tags: ["Bã mía", "Xơ dừa", "Trấu"]
}, {
  order: "04",
  title: "Kim loại",
  color: "#7B7C86",
  icon: "../../assets/landing/danhmuc-icon-metal.svg",
  image: "../../assets/landing/danhmuc-metal.webp",
  description: ["Nguồn kim loại có khả năng", "thu hồi và đưa trở lại", "chuỗi giá trị."],
  tags: ["Nhôm", "Sắt", "Đồng"]
}, {
  order: "05",
  title: "Nhựa tái chế",
  color: "#04309E",
  icon: "../../assets/landing/danhmuc-icon-plastic.svg",
  image: "../../assets/landing/danhmuc-plastic.webp",
  description: ["Khám phá các nguồn nhựa có", "khả năng tái sử dụng", "và tái chế."],
  tags: ["PET", "HDPE", "PP"]
}, {
  order: "06",
  title: "Giấy & carton",
  color: "#8990B1",
  icon: "../../assets/landing/danhmuc-icon-paper.svg",
  image: "../../assets/landing/danhmuc-paper.webp",
  description: ["Các dòng giấy và carton", "có thể thu hồi, tái sử dụng", "và tái chế."],
  tags: ["Carton", "Giấy phế liệu"]
}];
function Categories() {
  const {
    MaterialCard
  } = window.LavatuDesignSystem_2cb126;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#fff",
      padding: "47px 53px 25px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: 32,
      flexWrap: "wrap",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 36,
      fontWeight: 600,
      color: "var(--color-brand-green)",
      margin: 0
    }
  }, "Danh m\u1EE5c v\u1EADt li\u1EC7u"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 8,
      fontSize: 18,
      color: "var(--color-brand-text)"
    }
  }, "Ngu\u1ED3n t\xE0i nguy\xEAn \u0111a d\u1EA1ng s\u1EB5n s\xE0ng t\xE1i s\u1EED d\u1EE5ng")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: 62,
      padding: "0 28px",
      borderRadius: 42,
      border: "1px solid #dadddf",
      color: "#4059aa",
      fontWeight: 700,
      fontSize: 18,
      textDecoration: "none"
    }
  }, "Xem t\u1EA5t c\u1EA3 \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,minmax(0,1fr))",
      gap: 14
    }
  }, CARDS.map(c => /*#__PURE__*/React.createElement(MaterialCard, _extends({
    key: c.order
  }, c)))));
}
window.Categories = Categories;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-home/Categories.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-home/Footer.jsx
try { (() => {
function Benefits() {
  const items = [["../../assets/landing/icons/benefit-transparency.svg", "Minh bạch", "Mọi giao dịch và quy trình đều được ghi nhận, đảm bảo tính xác thực cho báo cáo ESG."], ["../../assets/landing/icons/benefit-network.svg", "Kết nối doanh nghiệp", "Mạng lưới B2B rộng khắp giúp tối ưu hóa việc tìm kiếm đối tác cung ứng vật liệu."], ["../../assets/landing/icons/benefit-optimize.svg", "Tối ưu tài nguyên", "Giảm thiểu lãng phí, chuyển hóa chi phí xử lý rác thải thành doanh thu tiềm năng."], ["../../assets/landing/icons/benefit-sustainable.svg", "Phát triển bền vững", "Đồng hành cùng mục tiêu Net Zero và cam kết bảo vệ môi trường toàn cầu."]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--color-brand-green)",
      padding: "64px 52px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 40
    }
  }, items.map(([icon, title, desc]) => /*#__PURE__*/React.createElement("div", {
    key: title
  }, /*#__PURE__*/React.createElement("img", {
    src: icon,
    alt: "",
    height: 32
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 16,
      fontSize: 20,
      fontWeight: 700,
      color: "#fff"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 8,
      fontSize: 14,
      color: "rgba(128,190,166,0.8)"
    }
  }, desc)))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: "1px solid #e5e7eb",
      paddingTop: 48,
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1400,
      margin: "0 auto",
      padding: "0 40px",
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 32,
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: "#003527"
    }
  }, "Lavatu"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: "#6b7280",
      lineHeight: 1.6
    }
  }, "N\u1EC1n t\u1EA3ng th\u01B0\u01A1ng m\u1EA1i \u0111i\u1EC7n t\u1EED h\xE0ng \u0111\u1EA7u cho kinh t\u1EBF tu\u1EA7n ho\xE0n B2B, h\u01B0\u1EDBng t\u1EDBi m\u1ED9t t\u01B0\u01A1ng lai kh\xF4ng r\xE1c th\u1EA3i.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: "#003527"
    }
  }, "Li\xEAn h\u1EC7"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: "#6b7280",
      lineHeight: 2
    }
  }, "29 Ti\u1EC1n Giang, Tp. H\u1ED3 Ch\xED Minh", /*#__PURE__*/React.createElement("br", null), "thienan@grac.vn", /*#__PURE__*/React.createElement("br", null), "0898215221")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: "#003527"
    }
  }, "H\u1ED7 tr\u1EE3"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: "#6b7280",
      lineHeight: 2
    }
  }, "\u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng", /*#__PURE__*/React.createElement("br", null), "Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt", /*#__PURE__*/React.createElement("br", null), "Li\xEAn h\u1EC7", /*#__PURE__*/React.createElement("br", null), "FAQ")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: "#003527"
    }
  }, "C\xF4ng ty"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: "#6b7280",
      lineHeight: 2
    }
  }, "V\u1EC1 ch\xFAng t\xF4i", /*#__PURE__*/React.createElement("br", null), "Quy tr\xECnh", /*#__PURE__*/React.createElement("br", null), "Gi\u1EA3i ph\xE1p ESG", /*#__PURE__*/React.createElement("br", null), "B\xE1o c\xE1o ESG"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid #e5e7eb",
      padding: "16px 40px",
      display: "flex",
      justifyContent: "space-between",
      fontSize: 13,
      color: "#6b7280"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Lavatu. N\u1EC1n t\u1EA3ng kinh t\u1EBF tu\u1EA7n ho\xE0n chuy\xEAn nghi\u1EC7p."), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("span", null, "Facebook"), /*#__PURE__*/React.createElement("span", null, "LinkedIn"), /*#__PURE__*/React.createElement("span", null, "Youtube"))));
}
window.Benefits = Benefits;
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-home/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-home/Header.jsx
try { (() => {
function Header({
  active = "/"
}) {
  const items = [["/", "Trang chủ"], ["/products", "Sản phẩm"], ["/news", "Tin tức"], ["/solutions", "Giải pháp"]];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "#003716",
      padding: "0 24px",
      boxShadow: "0 1px 0 rgba(255,255,255,0.1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1920,
      margin: "0 auto",
      height: 72,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 56
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/global/logos/logo.png",
    alt: "Lavatu",
    style: {
      height: 32,
      filter: "brightness(0) invert(1)"
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 28
    }
  }, items.map(([href, label]) => /*#__PURE__*/React.createElement("a", {
    key: href,
    href: "#",
    style: {
      fontSize: 17,
      textDecoration: "none",
      paddingBottom: 8,
      position: "relative",
      color: active === href ? "#fff" : "rgba(255,255,255,0.72)",
      fontWeight: active === href ? 700 : 400,
      borderBottom: active === href ? "2px solid #fff" : "none"
    }
  }, label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      width: 32,
      height: 32,
      borderRadius: "50%",
      background: "transparent",
      border: "none",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/landing/icons/world_icon.png",
    alt: "",
    width: 22,
    height: 22
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgba(255,255,255,0.72)",
      fontSize: 17,
      cursor: "pointer"
    }
  }, "H\u1ED7 Tr\u1EE3"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgba(255,255,255,0.86)",
      fontSize: 17,
      cursor: "pointer"
    }
  }, "\u0110\u0103ng k\xED"), /*#__PURE__*/React.createElement("button", {
    style: {
      borderRadius: 12,
      background: "#fff",
      color: "#003527",
      border: "none",
      padding: "12px 28px",
      fontWeight: 700,
      fontSize: 17,
      cursor: "pointer"
    }
  }, "T\u01B0 v\u1EA5n"), /*#__PURE__*/React.createElement("button", {
    style: {
      borderRadius: 12,
      background: "#009966",
      color: "#fff",
      border: "none",
      padding: "12px 28px",
      fontWeight: 700,
      fontSize: 17,
      cursor: "pointer"
    }
  }, "\u0110\u0103ng nh\u1EADp"))));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-home/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-home/Hero.jsx
try { (() => {
function Hero() {
  const slides = [["AI Lavie tư vấn", "../../assets/landing/home-carousel/01-ai-lavie.png"], ["Khám phá vật liệu", "../../assets/landing/home-carousel/03-kham-pha-vat-lieu.png"], ["Đăng ký tài khoản", "../../assets/landing/home-carousel/06-dang-ky-tai-khoan.png"]];
  const [announce, setAnnounce] = React.useState(true);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "linear-gradient(181deg,#003716 16%,#007254 63%)",
      minHeight: 720
    }
  }, announce && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      padding: "8px 0",
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      background: "rgba(0,62,47,0.95)",
      border: "1px solid #1b6957",
      borderRadius: 12,
      padding: "8px 36px",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      color: "rgba(255,255,255,0.9)"
    }
  }, "AI cho h\u1EC7 sinh th\xE1i tu\u1EA7n ho\xE0n \u2014 th\xF4ng minh, c\xE1 nh\xE2n h\xF3a v\xE0 lu\xF4n trong t\u1EA7m ki\u1EC3m so\xE1t."), /*#__PURE__*/React.createElement("span", {
    style: {
      borderRadius: 999,
      padding: "6px 16px",
      fontSize: 12,
      fontWeight: 600,
      color: "#fff",
      background: "linear-gradient(90deg,#18b97b 0%,#29b8d6 48%,#f5258f 100%)"
    }
  }, "Kh\xE1m ph\xE1 Lavie"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setAnnounce(false),
    style: {
      background: "none",
      border: "none",
      color: "rgba(255,255,255,0.55)",
      cursor: "pointer",
      fontSize: 16
    }
  }, "\xD7"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1,
      maxWidth: 760,
      margin: "0 auto",
      textAlign: "center",
      padding: "34px 24px 0"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 400,
      fontSize: 49,
      color: "#fff",
      lineHeight: 1.2,
      margin: 0
    }
  }, "Kh\xE1m ph\xE1 nh\u1EEFng \u0111i\u1EC1u c\xF3 th\u1EC3", /*#__PURE__*/React.createElement("br", null), "khi m\u1ECDi th\u1EE9 \u0111\u01B0\u1EE3c k\u1EBFt n\u1ED1i"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 24,
      fontSize: 18,
      color: "rgba(255,255,255,0.9)"
    }
  }, "K\u1EBFt n\u1ED1i d\u1EEF li\u1EC7u v\xE0 doanh nghi\u1EC7p v\u1EDBi n\u1EC1n t\u1EA3ng tu\u1EA7n ho\xE0n th\xF4ng minh, h\u1ED7 tr\u1EE3 b\u1EDFi AI."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: "flex",
      gap: 24,
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      borderRadius: 13,
      background: "#003527",
      color: "#fff",
      padding: "10px 20px",
      fontWeight: 600,
      fontSize: 15,
      textDecoration: "none"
    }
  }, "T\xECm v\u1EADt li\u1EC7u"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      borderRadius: 13,
      background: "#edf2fc",
      color: "#060b28",
      padding: "10px 20px",
      fontWeight: 600,
      fontSize: 15,
      textDecoration: "none"
    }
  }, "\u0110\u0103ng b\xE1n"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1,
      marginTop: 40,
      display: "flex",
      justifyContent: "center",
      gap: 20,
      padding: "0 20px 40px",
      flexWrap: "wrap"
    }
  }, slides.map(([label, img]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      width: 190,
      height: 266,
      borderRadius: 16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: label,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "contain"
    }
  })))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-home/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-home/NewsCTA.jsx
try { (() => {
function NewsCTA() {
  const {
    Button
  } = window.LavatuDesignSystem_2cb126;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#f9faf7",
      padding: "64px 67px 22px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 24,
      marginBottom: 32,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 32,
      fontWeight: 600,
      color: "var(--color-brand-green)",
      margin: 0
    }
  }, "Tin t\u1EE9c & ESG Insight"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 8,
      fontSize: 18,
      color: "#556960"
    }
  }, "C\u1EADp nh\u1EADt xu h\u01B0\u1EDBng, c\xE2u chuy\u1EC7n v\xE0 ki\u1EBFn th\u1EE9c v\u1EC1 kinh t\u1EBF tu\u1EA7n ho\xE0n t\u1EEB Lavatu v\xE0 c\u1ED9ng \u0111\u1ED3ng.")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      height: 48,
      padding: "0 24px",
      borderRadius: 999,
      border: "1px solid #000",
      background: "#fff",
      color: "#191c1b",
      fontWeight: 500,
      textDecoration: "none"
    }
  }, "T\u1EA5t c\u1EA3 b\xE0i vi\u1EBFt \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 20,
      marginBottom: 32
    }
  }, [1, 2, 3].map(n => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      borderRadius: 16,
      border: "1px solid #eee",
      background: "#fff",
      overflow: "hidden",
      boxShadow: "var(--shadow-card)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 140,
      background: "#e9efe8"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: "#14532d"
    }
  }, "ESG"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      margin: "8px 0 0",
      color: "#0f172a"
    }
  }, "Gi\u1EA3i ph\xE1p EPR cho bao b\xEC th\u1EF1c ph\u1EA9m #", n))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 24,
      border: "1px solid #d9e5d8",
      background: "#e9efe8",
      padding: 40,
      display: "flex",
      alignItems: "center",
      gap: 32,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 56,
      height: 56,
      borderRadius: "50%",
      background: "#dbe8dc",
      border: "1px solid #cbdecb",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 24
    }
  }, "\uD83D\uDCD6"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      color: "#142e23",
      margin: 0
    }
  }, "Ki\u1EBFn th\u1EE9c h\xF4m nay", /*#__PURE__*/React.createElement("br", null), "cho gi\xE1 tr\u1ECB ng\xE0y mai"), /*#__PURE__*/React.createElement("p", {
    style: {
      flex: 1,
      minWidth: 240,
      fontSize: 16,
      color: "#526a5f",
      margin: 0
    }
  }, "C\u1EADp nh\u1EADt xu h\u01B0\u1EDBng, c\xF4ng ngh\u1EC7 v\xE0 c\xE2u chuy\u1EC7n th\u1EF1c t\u1EBF v\u1EC1 t\xE1i s\u1EED d\u1EE5ng, t\xE1i ch\u1EBF v\xE0 ph\xE1t tri\u1EC3n b\u1EC1n v\u1EEFng."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Kh\xE1m ph\xE1 th\xEAm t\u1EA1i Blog Lavatu")));
}
window.NewsCTA = NewsCTA;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-home/NewsCTA.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-home/Process.jsx
try { (() => {
function Process() {
  const steps = [["Đăng bán", "Cập nhật thông tin vật liệu lên sàn."], ["Kiểm định", "Lavatu xác thực chất lượng vật liệu."], ["Kết nối", "Tìm kiếm & thương thảo với đối tác phù hợp."], ["Vận chuyển", "Hỗ trợ logistics chuyên nghiệp, an toàn."], ["Tái sử dụng", "Vật liệu bước vào vòng đời mới."]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#fff",
      padding: "64px 24px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      textAlign: "center",
      fontSize: 32,
      fontWeight: 600,
      color: "var(--color-brand-green)"
    }
  }, "Quy tr\xECnh giao d\u1ECBch Lavatu"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 34,
      display: "grid",
      gridTemplateColumns: "repeat(5,1fr)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: "10%",
      right: "10%",
      top: 32,
      height: 2,
      background: "var(--color-brand-line)"
    }
  }), steps.map(([title, desc], i) => /*#__PURE__*/React.createElement("div", {
    key: title,
    style: {
      position: "relative",
      zIndex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      maxWidth: 215,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 64,
      height: 64,
      borderRadius: "50%",
      border: "4px solid var(--color-brand-emerald)",
      background: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 20,
      fontWeight: 700,
      color: "var(--color-brand-green)",
      boxShadow: "var(--shadow-card-lg)"
    }
  }, i + 1), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 20,
      fontSize: 20,
      color: "var(--color-brand-green)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 12,
      fontSize: 15,
      fontWeight: 500,
      color: "var(--color-brand-text)"
    }
  }, desc)))));
}
window.Process = Process;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-home/Process.jsx", error: String((e && e.message) || e) }); }

__ds_ns.MaterialCard = __ds_scope.MaterialCard;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.CategoryBadge = __ds_scope.CategoryBadge;

__ds_ns.StatusBadge = __ds_scope.StatusBadge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.FilterChip = __ds_scope.FilterChip;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SearchInput = __ds_scope.SearchInput;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.SidebarNavItem = __ds_scope.SidebarNavItem;

})();
