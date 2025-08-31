import React from 'react';
import Section from '../section/Section';
import s from './personalProject.module.scss';
import { getGitHubData } from '@/app/services/getGitHubData';
import { githubRepos } from './githubRepos';

const PersonalProject = async () => {
  const repos = await getGitHubData(githubRepos);

  console.log(repos);

  return (
    <Section title='Personal Project'>
      <div className={s.project_container}>
        <ul className={s.project_list}>
          {repos && repos.length > 0 ? (
            repos.map(repo => (
              <li key={repo.name} className={s.project_item}>
                <a
                  href={repo.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={s.project_link}
                >
                  <h3 className={s.project_name}>{repo.name}</h3>
                  <p className={s.project_description}>説明: {repo.description ?? '不明'}</p>
                  <p className={s.project_lang}>使用言語: {repo.language ?? '不明'}</p>
                </a>
              </li>
            ))
          ) : (
            <p>リポジトリ情報がありません</p>
          )}
        </ul>
      </div>
    </Section>
  );
};

export default PersonalProject;
