import React from 'react';
import ProjectLayout, { SectionCard } from '../components/Layout/ProjectLayout';
import MayLike from '../components/MayLike';

import dewLogin from '../assets/DEW/dew_login.png';
import sphereSignin from '../assets/DEW/sphere_signin.png';
import dewDash from '../assets/DEW/dew_dash.png';
import dewExp from '../assets/DEW/dew_exp.png';
import topology from '../assets/DEW/topology.png';
import jupyterNotebook from '../assets/DEW/jupyter_notebook.png';
import sphereRevision from '../assets/DEW/sphere_revision.png';

function DEW() {
  return (
    <ProjectLayout
      title="Distributed Experiment Workflows"
      description="DEW is a web application that lets researchers visually design multi-node network experiments and deploy them to the SPHERE cybersecurity testbed in one click. Built as a beginner-friendly extension of the SPHERE Merge Portal, it replaces hand-written MergeTB models and the full manual workflow of experiment creation, resource reservation, materialization, XDC creation, and attachment."
    >
      <div className="flex justify-center gap-4">
        <a
          href="https://gitlab.com/mergetb/frontends/dew"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-2 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-500 transition-colors shadow-lg"
        >
          GitLab
        </a>
        <a
          href="https://dew.sphere-testbed.net/"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-2 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-500 transition-colors shadow-lg"
        >
          Live Site
        </a>
      </div>

      <SectionCard title="What is DEW?" images={[dewLogin]}>
        <p>
          DEW (Distributed Experiment Workflows) is a visual editor and deployment pipeline for large-scale cybersecurity experiments on the SPHERE research infrastructure. Researchers define topology, node behaviors, hardware constraints, and IP assignments in the browser, then push a complete experiment to SPHERE without writing low-level testbed configuration by hand.
        </p>
        <p>
          The project aligns with the SPHERE Merge Portal, which helps researchers manage and create large-scale cyber security experiments. DEW targets new SPHERE users who want to create and visualize experiments before committing them to the testbed—offering a gentler on-ramp than the full Merge Portal workflow alone.
        </p>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
          <li><strong>Visual experiment design</strong> — topology, behaviors, constraints, and bindings in one UI</li>
          <li><strong>Beginner-friendly</strong> — no hand-written MergeTB models required to get started</li>
          <li><strong>SPHERE extension</strong> — requires a SPHERE account; authenticates through SPHERE Kratos</li>
          <li><strong>One-click deploy</strong> — &quot;Push to SPHERE&quot; handles reservation, materialization, and XDC setup</li>
        </ul>
      </SectionCard>


      <SectionCard title="SPHERE Authentication" images={[sphereSignin]}>
        <p>
          DEW is an extension of the SPHERE ecosystem, not a standalone product. Users sign in with their SPHERE credentials via @ory/client (SPHERE Kratos), with legacy Google OAuth support. The backend issues cookie tokens and assigns synthetic <code className="text-purple-400">sphere_*</code> UIDs for SPHERE users so experiments stay tied to the correct testbed identity.
        </p>
        <p>
          After authentication, researchers land on the DEW workspace where experiments are versioned in SQLite (or MySQL in production) and stored as JSON blobs containing actors, behaviors, constraints, bindings, and node specifications.
        </p>
      </SectionCard>

      <SectionCard title="Dashboard & Experiment Workspace" images={[dewDash, dewExp]}>
        <p>
          The dashboard is the central hub for managing experiments. From here, users can open existing designs, start new ones, and track work in progress before pushing to the testbed.
        </p>
        <p>
          A new experiment opens as a blank canvas ready for topology and configuration. The editor keeps actors, behaviors, constraints, and node specs in memory through an RxJS <code className="text-purple-400">StateService</code> (BehaviorSubjects) on the frontend, while the Flask API persists versioned experiment records via SQLAlchemy-Continuum.
        </p>
      </SectionCard>

      <SectionCard title="Visual Topology Design" images={[topology]}>
        <p>
          DEW&apos;s topology editor uses vis-network for interactive graph editing, with @swimlane/ngx-graph for dependency visualization and d3 for additional graph rendering. Researchers place nodes, wire connections, and assign behaviors and hardware constraints through Angular Material and Bootstrap UI components—including ngx-quill editors for rich behavior and constraint definitions.
        </p>
        <p>
          The example topology above shows a multi-node network layout designed entirely in DEW, ready to be validated and pushed to SPHERE without translating the design into raw MergeTB configuration manually.
        </p>
      </SectionCard>

      <SectionCard title="Push to SPHERE — One-Click Deployment" images={[jupyterNotebook, sphereRevision]}>
        <p>
          On SPHERE alone, deploying an experiment typically means stepping through experiment creation, resource reservation, materialization, XDC creation, and XDC attachment. DEW collapses that chain into a single <strong>Push to SPHERE</strong> action.
        </p>
        <p>
          After deploy, JupyterHub opens automatically for the experiment&apos;s XDC so researchers can work with notebooks immediately. The Merge Portal view confirms the experiment is live on the testbed with the expected topology and resources.
        </p>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
          <li>Generates and translates configs through <code className="text-purple-400">DewFunctions/</code> parsers and generators on the backend</li>
          <li>Calls the external SPHERE Merge API via <code className="text-purple-400">@mergetb/api</code> testbed types</li>
          <li>Opens the Jupyter notebook URL for the materialized experiment without manual navigation</li>
        </ul>
      </SectionCard>

      <SectionCard title="Frontend — Angular 15">
        <ul className="list-disc list-inside space-y-2 text-slate-300">
          <li><strong>Framework:</strong> Angular 15 — editor and API client; proxies <code className="text-purple-400">/api/*</code> to Flask</li>
          <li><strong>UI:</strong> Angular Material + Bootstrap</li>
          <li><strong>Graphs:</strong> vis-network, @swimlane/ngx-graph, d3</li>
          <li><strong>Auth:</strong> @ory/client (SPHERE Kratos), legacy Google OAuth</li>
          <li><strong>Testbed:</strong> @mergetb/api</li>
          <li><strong>Editors:</strong> ngx-quill for behavior and constraint editing</li>
          <li><strong>State:</strong> StateService with RxJS BehaviorSubjects</li>
        </ul>
      </SectionCard>

      <SectionCard title="Backend — Flask + REST">
        <ul className="list-disc list-inside space-y-2 text-slate-300">
          <li><strong>Framework:</strong> Flask 1.1 + Flask-RESTX (Swagger), ~70+ routes in <code className="text-purple-400">privateapi.py</code></li>
          <li><strong>ORM:</strong> Flask-SQLAlchemy + SQLAlchemy-Continuum (versioned experiments)</li>
          <li><strong>Migrations:</strong> Alembic</li>
          <li><strong>Core logic:</strong> DewFunctions/ — parsers, generators, translators</li>
          <li><strong>SSH (legacy):</strong> paramiko / jumpssh for DeterLab</li>
          <li><strong>Process server:</strong> uWSGI behind nginx reverse proxy</li>
        </ul>
      </SectionCard>

      <SectionCard title="Infrastructure">
        <p>
          In development, the Angular dev server proxies to Flask on port 5555 via <code className="text-purple-400">proxy.conf.json</code>. Production runs as a Docker image: nginx on port 80 serves Angular static assets and proxies <code className="text-purple-400">/api</code> to Flask on port 8800. Kubernetes deployment uses a Helm chart (<code className="text-purple-400">deploy/dew/</code>) with a single container, CephFS PVC for SQLite persistence, and ingress at <code className="text-purple-400">dew.sphere-testbed.net</code>.
        </p>
        <pre className="text-sm bg-slate-900 p-4 rounded overflow-x-auto text-slate-300">
{`Browser
  └─► nginx (TLS, static files, /api proxy)
        └─► uWSGI → Flask API
                └─► SQLite (PVC in K8s)
                └─► SPHERE Merge API (external)`}
        </pre>
      </SectionCard>

      <MayLike currentProject="Distributed Experiment Workflows" />
    </ProjectLayout>
  );
}

export default DEW;
