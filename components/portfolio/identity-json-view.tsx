import type { ReactNode } from "react";
import { profileCode } from "@/lib/site";

type ProfileCode = typeof profileCode;

type IdentityJsonViewProps = {
  data: ProfileCode;
};

function Punct({ children }: { children: ReactNode }) {
  return <span className="text-json-punct">{children}</span>;
}

function Key({ children }: { children: string }) {
  return <span className="text-json-key">{children}</span>;
}

function Str({ children }: { children: string }) {
  return (
    <>
      <Punct>{'"'}</Punct>
      <span className="text-json-string">{children}</span>
      <Punct>{'"'}</Punct>
    </>
  );
}

function Highlight({ children }: { children: string }) {
  return (
    <>
      <Punct>{'"'}</Punct>
      <span className="text-json-value-highlight">{children}</span>
      <Punct>{'"'}</Punct>
    </>
  );
}

function StringList({ items, indent }: { items: readonly string[]; indent: string }) {
  return (
    <>
      <Punct>{"["}</Punct>
      {"\n"}
      {items.map((item, index) => (
        <span key={item}>
          {indent}
          <Str>{item}</Str>
          {index < items.length - 1 ? <Punct>{","}</Punct> : null}
          {"\n"}
        </span>
      ))}
      {indent.slice(0, -2)}
      <Punct>{"]"}</Punct>
    </>
  );
}

export function IdentityJsonView({ data }: IdentityJsonViewProps) {
  const metrics = data.impact_metrics;

  return (
    <code className="font-mono text-[13px] leading-[1.62] text-slate-300">
      <Punct>{"{"}</Punct>
      {"\n"}
      {"  "}
      <Key>identity</Key>
      <Punct>: {"{"}</Punct>
      {"\n"}
      {"    "}
      <Key>full_name</Key>
      <Punct>: </Punct>
      <Str>{data.identity.full_name}</Str>
      <Punct>,</Punct>
      {"\n"}
      {"    "}
      <Key>title</Key>
      <Punct>: </Punct>
      <Str>{data.identity.title}</Str>
      <Punct>,</Punct>
      {"\n"}
      {"    "}
      <Key>expertise</Key>
      <Punct>: </Punct>
      <StringList items={data.identity.expertise} indent={"      "} />
      <Punct>,</Punct>
      {"\n"}
      {"    "}
      <Key>mission</Key>
      <Punct>: </Punct>
      <Str>{data.identity.mission}</Str>
      {"\n"}
      {"  "}
      <Punct>{"},"}</Punct>
      {"\n"}
      {"  "}
      <Key>bio</Key>
      <Punct>: </Punct>
      <Str>{data.bio}</Str>
      <Punct>,</Punct>
      {"\n"}
      {"  "}
      <Key>impact_metrics</Key>
      <Punct>: {"{"}</Punct>
      {"\n"}
      {"    "}
      <Key>p99_latency_reduction</Key>
      <Punct>: </Punct>
      <Highlight>{metrics.p99_latency_reduction}</Highlight>
      <Punct>,</Punct>
      {"\n"}
      {"    "}
      <Key>peak_throughput</Key>
      <Punct>: </Punct>
      <Highlight>{metrics.peak_throughput}</Highlight>
      <Punct>,</Punct>
      {"\n"}
      {"    "}
      <Key>service_availability</Key>
      <Punct>: </Punct>
      <Highlight>{metrics.service_availability}</Highlight>
      {"\n"}
      {"  "}
      <Punct>{"}"}</Punct>
      {"\n"}
      <Punct>{"}"}</Punct>
    </code>
  );
}
